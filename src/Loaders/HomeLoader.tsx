import { type Agent, type House } from "../Types.ts";

// this loader fetches agents and houses from the API
export async function HomeLoader(): Promise<{ agents: Agent[]; houses: House[] }> {
    const [agents, houses] = await Promise.all([
        fetch('https://dinmaegler.onrender.com/agents?_limit=3').then(res => res.json()),
        fetch('https://dinmaegler.onrender.com/homes?_limit=4').then(res => res.json())
    ]);
    return { agents, houses };
}



