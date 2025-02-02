import { privateKeyToAccount } from "viem/accounts";
import { registerAgents } from "./agents";
import { EventBus } from "./comms";

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
console.log(account, "account in setup.ts");
// initialize the event bus
const eventBus = new EventBus();

// register the agents
const { executorAgent, observerAgent, taskManagerAgent } = registerAgents(
  eventBus,
  account
);

export { eventBus, executorAgent, observerAgent, taskManagerAgent, account };
