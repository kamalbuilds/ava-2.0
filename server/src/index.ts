// // src/index.ts
// import { serve } from "@hono/node-server";
// import { app } from "./app";
// import env from "./env";
// import { registerAgents } from "./agents";
// import { EventBus } from "./comms";
// import { privateKeyToAccount } from "viem/accounts";
// import { setupWebSocket } from "./websocket";
// import figlet from "figlet";
import { WebSocket, WebSocketServer } from "ws";
import { EventBus } from "./comms";
import { registerAgents } from "./agents";
import { privateKeyToAccount } from "viem/accounts";
import env from "./env";
import { AIFactory } from "./services/ai/factory";

// console.log(figlet.textSync("AVA-2.0"));
// console.log("======== Initializing Server =========");

// // Initialize event bus and agents
// const eventBus = new EventBus();
// const account = privateKeyToAccount(env.PRIVATE_KEY as `0x${string}`);
// export const agents = registerAgents(eventBus, account);

// const PORT = env.PORT || 3001;

// serve(
//   {
//     fetch: app.fetch,
//     port: PORT,
//   },
//   (info) => {
//     console.log(`[🚀] Server running on http://localhost:${info.port}`);
//     console.log(`[👀] Observer agent starting...`);

//     console.log("Event bus", eventBus);
//     // Setup WebSocket server
//     setupWebSocket(eventBus);

//     // agents.observerAgent.start(account.address);
//   }
// );

// Initialize core services
const eventBus = new EventBus();
const account = privateKeyToAccount(env.PRIVATE_KEY as `0x${string}`);

// Create default AI provider
const defaultProvider = AIFactory.createProvider({
  provider: 'openai',
  apiKey: env.OPENAI_API_KEY!
});

// Initialize agents with default provider
const agents = registerAgents(eventBus, account, defaultProvider);
const { observerAgent } = agents;

// Setup WebSocket server
const WS_PORT = 3002;
const wss = new WebSocketServer({ port: WS_PORT });

wss.on("connection", (ws: WebSocket) => {
  console.log(`[WebSocket] Client connected on port ${WS_PORT}`);

  // Forward agent events to the client
  const forwardEvent = (data: any) => {
    // Format system events for the right sidebar
    const eventData = {
      type: "agent-event",
      timestamp: new Date().toLocaleTimeString(),
      agent: data.agent || "system",
      action: data.action || data.error || "Unknown event",
      eventType: data.error ? "error" : "info"
    };
    ws.send(JSON.stringify(eventData));
  };

  // Forward agent messages to chat
  const forwardMessage = (data: any) => {
    // Format chat messages for the center panel
    const messageData = {
      type: "agent-message",
      timestamp: new Date().toLocaleTimeString(),
      role: "assistant",
      content: data.message || data.report || data.result,
      agentName: data.agent,
      collaborationType: data.collaborationType || "analysis"
    };
    ws.send(JSON.stringify(messageData));
  };

  // Subscribe to events
  eventBus.subscribe("agent-action", forwardEvent);
  eventBus.subscribe("agent-response", forwardMessage);
  eventBus.subscribe("agent-error", forwardEvent);

  ws.on("message", async (message: string) => {
    try {
      const data = JSON.parse(message.toString());

      if (data.type === "settings") {
        // Update AI provider based on settings
        const newProvider = AIFactory.createProvider(data.settings);
        observerAgent.updateAIProvider(newProvider);
      }
      else if (data.type === "command") {
        // Add user message to chat
        const messageData = {
          type: "agent-message",
          timestamp: new Date().toLocaleTimeString(),
          role: "user",
          content: data.command,
          agentName: "user"
        };
        ws.send(JSON.stringify(messageData));

        if (data.command === "stop") {
          observerAgent.stop();
          eventBus.emit("agent-action", {
            agent: "system",
            action: "All agents stopped"
          });
        } else {
          eventBus.emit("agent-action", {
            agent: "system",
            action: "Starting task processing"
          });
          await observerAgent.processTask(data.command);
        }
      }
    } catch (error) {
      console.error("Error processing WebSocket message:", error);
      eventBus.emit("agent-error", {
        agent: "system",
        error: "Failed to process command"
      });
    }
  });

  ws.on("close", () => {
    eventBus.unsubscribe("agent-action", forwardEvent);
    eventBus.unsubscribe("agent-response", forwardMessage);
    eventBus.unsubscribe("agent-error", forwardEvent);
  });
});

console.log(`[🔌] WebSocket Server running on ws://localhost:${WS_PORT}`);
