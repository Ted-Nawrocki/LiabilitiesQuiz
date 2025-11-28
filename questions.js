const questions = [
  {
    id: "scenario-1",
    title: "Split Position – Non-US vs QIB Contra",
    category: "Loans and Liabilities",
    difficulty: "medium",
    prompt: `
Company ABC (CUSIP 123ABC789) announces an exchange offer with an early participation deadline of June 13. The offer has 5 options:

• Option 1 – Early exchange for new notes for QIB holders (Contra CUSIP 123QIB789)
• Option 2 – Early exchange for new notes for Non-US holders (Contra CUSIP 123NUS789)
• Options 3 & 4 – Late exchange mirrors of Options 1 & 2
• Option 5 – NOAC

Client 999 holds a 1,000,000 position split as:
• 500,000 in general custody
• 500,000 on loan with borrowing broker 352

Client 999 responds for their full 1,000,000 position into Option 2 (Non-US).

What do you do next?
    `.trim(),
    options: [
      {
        id: "1",
        text: "Do nothing. The system will generate the correct instructions.",
        isCorrect: false,
        feedback: "Doing nothing is not an option. When a client responds and the position is split, the team must align loans, contras, and liabilities with the elected option."
      },
      {
        id: "2",
        text: "PTOP 1,000,000 into the 123NUS789 contra and leave the loan alone.",
        isCorrect: false,
        feedback: "Incorrect. You cannot ignore the loan portion. The borrowing broker’s liability must align with the client’s Non-US election."
      },
      {
        id: "3",
        text: "Confirm the loan with broker 352, ensure PTOP was made in the QIB contra, and post liability under the QIB option.",
        isCorrect: false,
        feedback: "Incorrect. This would misalign the client’s Non-US election with a QIB contra option."
      },
      {
        id: "4",
        text: "Confirm the loan with broker 352, ensure PTOP was made in the Non-US option, and post liability under the Non-US contra.",
        isCorrect: true,
        feedback: "Correct. When client positions are split and an election is received, the loan confirmation, PTOP, and liability must all reflect the elected Non-US option."
      }
    ]
  }
];
