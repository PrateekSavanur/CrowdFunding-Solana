import { Program } from "@coral-xyz/anchor";
import { IDL, Crowdfunding } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

// Replace with your program's public key
const programId = new PublicKey("EhPrwgcRAqQev6xmhoHgrTMpxeJ5FzGgj8d1oY5PPiXx");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program(IDL, programId, {
  connection,
});

// Replace with the appropriate seeds for your crowdfunding program's PDA
export const [campaignPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("campaign")], // Use the appropriate seed for your program
  program.programId
);
