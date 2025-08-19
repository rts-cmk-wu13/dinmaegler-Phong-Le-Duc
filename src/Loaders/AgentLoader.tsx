import { type Agent } from "../Types.ts"

// this loader fetches agents from the API
export async function AgentLoader(): Promise<{ agents: Agent[] }> {
    const response = await fetch('https://dinmaegler.onrender.com/agents');
    if (!response.ok) {
        throw new Error("Failed to fetch agents");
    }
    const agents = await response.json();
    return { agents };  // Wrap in object like HomeLoader to maintain consistency and fetchshell remain simple. not contain both object and array
}