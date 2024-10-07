export const IDL = {
  address: "EhPrwgcRAqQev6xmhoHgrTMpxeJ5FzGgj8d1oY5PPiXx",
  metadata: {
    name: "crowdfunding",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "donate",
      discriminator: [121, 186, 218, 211, 73, 70, 196, 180],
      accounts: [
        {
          name: "campaign",
          writable: true,
        },
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "initialize",
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: "campaign",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [67, 65, 77, 80, 65, 73, 71, 78, 95, 68, 69, 77, 79],
              },
              {
                kind: "account",
                path: "user",
              },
            ],
          },
        },
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    },
    {
      name: "withdraw",
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
      accounts: [
        {
          name: "campaign",
          writable: true,
        },
        {
          name: "user",
          writable: true,
          signer: true,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Campaign",
      discriminator: [50, 40, 49, 11, 157, 220, 229, 192],
    },
  ],
  types: [
    {
      name: "Campaign",
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: "pubkey",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "amount_donated",
            type: "u64",
          },
        ],
      },
    },
  ],
};

export const Crowdfunding = {
  address: "EhPrwgcRAqQev6xmhoHgrTMpxeJ5FzGgj8d1oY5PPiXx",
  metadata: {
    name: "crowdfunding",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "donate",
      discriminator: [121, 186, 218, 211, 73, 70, 196, 180],
      accounts: [
        {
          name: "campaign",
          writable: true,
        },
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "systemProgram",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "initialize",
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: "campaign",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [67, 65, 77, 80, 65, 73, 71, 78, 95, 68, 69, 77, 79],
              },
              {
                kind: "account",
                path: "user",
              },
            ],
          },
        },
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "systemProgram",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    },
    {
      name: "withdraw",
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
      accounts: [
        {
          name: "campaign",
          writable: true,
        },
        {
          name: "user",
          writable: true,
          signer: true,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "campaign",
      discriminator: [50, 40, 49, 11, 157, 220, 229, 192],
    },
  ],
  types: [
    {
      name: "campaign",
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: "pubkey",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "amountDonated",
            type: "u64",
          },
        ],
      },
    },
  ],
};
