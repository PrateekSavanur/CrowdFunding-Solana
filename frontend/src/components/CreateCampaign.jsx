import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { program } from "../helpers/setup";

export default function CreateCampaign() {
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const [isLoading, setIsLoading] = useState(false);
    const [campaignName, setCampaignName] = useState("");
    const [campaignDescription, setCampaignDescription] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!publicKey) return;

        setIsLoading(true);

        try {
            // Create a transaction to invoke the initialize function
            const transaction = await program.methods
                .initialize(campaignName, campaignDescription)
                .accounts({
                    user: publicKey,
                })
                .transaction();

            const transactionSignature = await sendTransaction(transaction, connection);
            console.log(`View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet`);
        } catch (error) {
            console.error("Error creating campaign:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="create-campaign">
            <h2>Create a New Campaign</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="campaignName">Campaign Name:</label>
                    <input
                        type="text"
                        id="campaignName"
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="campaignDescription">Campaign Description:</label>
                    <textarea
                        id="campaignDescription"
                        value={campaignDescription}
                        onChange={(e) => setCampaignDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={!publicKey || isLoading}>
                    {isLoading ? "Creating..." : "Create Campaign"}
                </button>
            </form>
        </div>
    );
}
