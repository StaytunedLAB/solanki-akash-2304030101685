// ---------------------------------------------
// TASK 1 — Banking System (No HTML, No CSS)
// Stay Tuned LLP — Web Developer Intern
// ---------------------------------------------

function processBankAccount(accountData) {
  let applied = [];
  let rejected = [];
  let finalBalance = 0;

  // Deep copy (original input must not change)
  const input = JSON.parse(JSON.stringify(accountData));

  try {
    // Convert opening balance safely
    const opening = Number(input.initialBalance);
    if (isNaN(opening) || opening < 0) {
      throw new Error("Invalid opening balance");
    }

    finalBalance = opening;

    const list = Array.isArray(input.transactions)
      ? input.transactions
      : [];

    for (const tx of list) {
      try {
        if (!tx.type) throw new Error("Missing transaction type");
        if (!tx.amount && tx.amount !== 0)
          throw new Error("Missing amount");

        let amount = Number(tx.amount);
        if (isNaN(amount)) throw new Error("Amount is not a number");
        if (amount <= 0) throw new Error("Amount must be > 0");

        // Apply transaction
        if (tx.type === "Deposit") {
          finalBalance += amount;
          applied.push({ ...tx, status: "Applied" });

        } else if (tx.type === "Withdraw") {
          if (amount > finalBalance)
            throw new Error("Insufficient balance");

          finalBalance -= amount;
          applied.push({ ...tx, status: "Applied" });

        } else {
          throw new Error("Unknown transaction type");
        }

      } catch (txErr) {
        rejected.push({ transaction: tx, reason: txErr.message });
      }
    }

    return {
      accountNumber: input.accountNumber,
      accountHolder: input.accountHolder,
      currency: input.currency,
      openingBalance: input.initialBalance,
      finalBalance: finalBalance,
      appliedTransactions: applied,
      rejectedTransactions: rejected,
      log: "Processed successfully",
    };

  } catch (err) {
    return {
      accountNumber: input.accountNumber,
      accountHolder: input.accountHolder,
      currency: input.currency,
      openingBalance: input.initialBalance,
      finalBalance: finalBalance,
      appliedTransactions: applied,
      rejectedTransactions: rejected,
      systemError: err.message,
      log: "System Error",
    };

  } finally {
    console.log("Bank processing completed (finally)");
  }
}


// ----------------------------------------------------
// Example Input
// ----------------------------------------------------
const account = {
  accountNumber: "ACC1001",
  accountHolder: "Akash",
  initialBalance: "2000",
  currency: "INR",
  transactions: [
    { type: "Deposit", amount: 500 },
    { type: "Withdraw", amount: "300" },
    { type: "Withdraw", amount: 5000 }, // rejected
    { type: "Deposit", amount: -20 },    // rejected
    { amount: 400 },                     // rejected
    { type: "Something", amount: 200 }   // rejected
  ]
};

console.log(processBankAccount(account));
