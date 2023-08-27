'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../layout.module.css';

const commands = [
  {
    name: "/help",
    description: "Redirects you here or brings up the select menu through a command.",
  },
  {
    name: "/search stats <guid>",
    description: "Returns stats on a user if valid guid.",
  },
  {
    name: "/search records <guid>",
    description: "Returns personal records on a user if valid guid.",
  },
  {
    name: "/search leaderstats",
    description: "Returns top 3 people for every category on pepiti servers.",
  },
  {
    name: "/search races <guid>",
    description: "Returns a list of a users races based on guid.",
  },
  {
    name: "/search race <id>",
    description: "Returns information on a race if valid race id.",
  },
  {
    name: "/search username <username/guid>",
    description: "Search for a user based on what is provided.",
  },
  {
    name: "/whois <guid>",
    description: "Returns a users Steam & more information.",
  },
  {
    name: "/search blacklist <guid>",
    description: "Searches the global blacklist and checks if the guid provided is blacklisted.",
  },
  {
    name: "/setup autostats <guid> <channel>",
    description: "This sets up automatic rider statistics from pepiti servers, this updates every hour.",
    permissions: ["Manage Guild"]
  },
  {
    name: "/cancel <guid>",
    description: "Cancels automatic rider statistics for that guid.",
    permissions: ["Manage Messages"]
  },
  {
    name: "/autostatsview",
    description: "Returns a list of automatic stats setup in your server.",
  },
  {
    name: "/embed <code>",
    description: "Send a custom embed using generated code from https://3jm.github.io/wrld-embed-generator/, requires permissions below if sending to any channel that is not the one the command is ran in.",
    permissions: ["Manage Channels"]
  },
  {
    name: "/information info",
    description: "Basic info about the bot.",
  },
  {
    name: "/information ping",
    description: "Bot's latency.",
  },
  {
    name: "/information github <username>",
    description: "View someones github.",
  },
  {
    name: "/duck",
    description: "Returns a cute duck.",
  },
  {
    name: "/names lookup <user: optional>",
    description: "Shows past usernames for a user.",
  },
  {
    name: "/names clear",
    description: "Clears YOUR names from the database.",
  },
  {
    name: "/information about",
    description: "Show's information about the server.",
  },
  {
    name: "/mymxb races",
    description: "View a list of upcoming races.",
  },
  {
    name: "/mymxb championship",
    description: "View a list of championship series races.",
  },
  {
    name: "/mymxb statistics",
    description: "View a racer's statistics.",
  },
  {
    name: "/mymxb registered",
    description: "Check if a user is registered for a specific race.",
  },
  {
    name: "/mymxb results",
    description: "View the results a user got in a specific race.",
  },
  {
    name: "/settings commands restrict <channel>",
    description: "Set a commands channel for the bot (Multiple channels allowed).",
    permissions: ["Manage Guild"]
  },
  {
    name: "/settings commands unrestrict",
    description: "Remove command channel restrictions.",
    permissions: ["Manage Guild"]
  },
  {
    name: "/changelog",
    description: "View the most recent or all MX Bikes game updates with patch notes.",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const numCommands = commands.length;

  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const PermissionTag = ({ permission }) => (
    <span className="inline-block bg-[#303030] rounded-full px-2 py-1 text-sm font-semibold text-white mr-2 mb-2">
      {permission}
    </span>
  );
  
  
  const CommandCard = ({ command }) => (
    <div className="command-card-wrapper">
      <div className="command-card">
        <div className="command-header flex justify-between items-center">
          <div className="command-name text-[#547db3] font-bold">{command.name}</div>
        </div>
        <div className="command-description text-white mt-2">{command.description}</div>
        {command.permissions && command.permissions.length > 0 && (
          <div className="command-permissions mt-2">
            <div className="text-[#7d7d7d]">Permissions:</div>
            <div className="mt-2">
              {command.permissions.map((permission, index) => (
                <PermissionTag key={index} permission={permission} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  

  return (
      <main className="flex justify-center items-center p-4">
        <Head>
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <div className="flex flex-col md:flex-row w-full md:w-3/4 justify-center items-start">
          <div className="bg-[#101010] p-4 md:p-8 rounded-lg md:w-3/4">
            <h1 className='text-center font-bold text-xl mb-5'>
              Wrld has {numCommands} available commands.
            </h1>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-[#191919] text-white placeholder-gray-400"
                placeholder="Search commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredCommands.map((command, index) => (
              <div key={index} className="mb-4 bg-[#191919] p-4 rounded-lg mb-4">
                <CommandCard command={command} />
              </div>
            ))}
          </div>
        </div>
      </main>
  );
}