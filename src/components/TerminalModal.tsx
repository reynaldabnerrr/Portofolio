import React, { useState } from "react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  isHacking: boolean;
  setIsHacking: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TerminalModal({
  isOpen,
  onClose,
  isHacking,
  setIsHacking,
}: TerminalModalProps) {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Don Neto Developer Terminal [Version 1.0.0]",
    "Type 'help' to view all available commands.",
    "guest@donneto:~$ ",
  ]);

  if (!isOpen) return null;

  const handleTerminalSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let newLogs = [...terminalLogs];
    if (newLogs[newLogs.length - 1] === "guest@donneto:~$ ") {
      newLogs[newLogs.length - 1] = `guest@donneto:~$ ${terminalInput}`;
    } else {
      newLogs.push(`guest@donneto:~$ ${terminalInput}`);
    }

    switch (cmd) {
      case "help":
        newLogs.push(
          "Available commands:",
          "  about        - View Reynald's bio",
          "  projects     - List showcase projects and links",
          "  skills       - Show technical stack details",
          "  contact      - Display professional email and networks",
          "  achievements - List CTF competition rewards",
          "  hack         - Execute automated matrix decryption sequence",
          "  clear        - Clear console history"
        );
        break;
      case "about":
        newLogs.push(
          "Reynald Abner Tananda, S.T. is a Computer Science Graduate from Hasanuddin University",
          "focusing on Software Engineering, Laravel REST APIs, Flutter UI, and cybersecurity forensics."
        );
        break;
      case "projects":
        newLogs.push(
          "Featured Projects:",
          "  1. Clean Plate Lab (High-Protein Healthy Catering & Clinical Nutrition)",
          "  2. E-Logbook Radiology UNHAS (Laravel & PWA medical platform)",
          "  3. Topcell CRM (Laravel enterprise portal)",
          "  4. ANTEKHUB (Flutter student networking)",
          "  5. Jokka Web (Next.js culture explorer)",
          "  6. Topcell Company Profile (Next.js responsive landing page)"
        );
        break;
      case "skills":
        newLogs.push(
          "Programming: Python, PHP, JS, Kotlin, Dart",
          "Web: Laravel, React, Next.js, Nginx, REST APIs",
          "Mobile/DS: Flutter, Machine Learning, Deep Learning, NLP",
          "Tools: Git, Linux, Docker, Tailwind CSS, SQL databases"
        );
        break;
      case "contact":
        newLogs.push(
          "Direct contact details:",
          "  Email    : reynald030685@gmail.com",
          "  GitHub   : github.com/reynaldabnerrr",
          "  LinkedIn : linkedin.com/in/reynald-abner-tananda"
        );
        break;
      case "achievements":
        newLogs.push(
          "Achievements Milestones:",
          "  - GEMASTIK XVIII Cyber Security Finalist (2025)",
          "  - Pragyan CTF 2025 NIT India Winner (1st Student Category)",
          "  - Interfest CTF Top 6 (2024)",
          "  - Cyber Jawara International Top 11 (2024)"
        );
        break;
      case "clear":
        newLogs = [];
        break;
      case "hack":
        setIsHacking(true);
        setTimeout(() => {
          setIsHacking(false);
          setTerminalLogs((prev) => [
            ...prev,
            "> Hacking simulator complete. Target database successfully decrypted.",
          ]);
        }, 3000);
        break;
      default:
        newLogs.push(`Command not found: '${cmd}'. Type 'help' to see options.`);
    }

    if (cmd !== "clear") {
      newLogs.push("guest@donneto:~$ ");
    } else {
      newLogs = ["guest@donneto:~$ "];
    }

    setTerminalLogs(newLogs);
    setTerminalInput("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Developer terminal console"
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div className="cyber-card w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-[#070c14]/90 overflow-hidden shadow-2xl flex flex-col h-[400px]">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between bg-white/[0.02] border-b border-white/[0.06] px-4 py-3 select-none">
          <div className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer animate-pulse"
              onClick={onClose}
              role="button"
              aria-label="Close terminal"
            ></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            <span className="text-[10px] text-gray-400 font-mono ml-2 uppercase font-bold tracking-wider flex items-center gap-1.5">
              <i className="fa-solid fa-terminal text-indigo-400" aria-hidden="true"></i> guest@donneto: ~
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white text-xs font-bold font-mono px-2 py-0.5 rounded hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Close terminal modal"
          >
            ESC
          </button>
        </div>

        {/* Logs Area */}
        <div
          className="flex-1 p-4 overflow-y-auto font-mono text-xs text-green-400 space-y-1.5 scrollbar-thin"
          aria-live="polite"
        >
          {terminalLogs.map((log, index) => (
            <div key={index} className="whitespace-pre-wrap leading-relaxed">
              {log}
            </div>
          ))}
        </div>

        {/* Input Line Form */}
        <form
          onSubmit={handleTerminalSubmit}
          className="bg-[#05080e]/60 border-t border-white/[0.05] p-3 flex items-center gap-2"
        >
          <label htmlFor="terminal-input" className="font-mono text-xs text-indigo-400 font-bold">
            guest@donneto:~$
          </label>
          <input
            id="terminal-input"
            name="terminalInput"
            type="text"
            autoFocus
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            placeholder="Type 'help' and press Enter…"
            className="flex-1 bg-transparent text-xs font-mono text-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 placeholder:text-gray-700"
          />
        </form>
      </div>
    </div>
  );
}
