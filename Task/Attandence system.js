// --------------------------------------------------
// TASK 2 — Employee Attendance (No HTML, No CSS)
// Stay Tuned LLP — Web Developer Intern
// --------------------------------------------------

function processAttendance(attendanceData) {
  let summary = {
    employeeId: attendanceData.employeeId,
    date: attendanceData.date,
    status: "error",
    totalMinutes: 0,
    overtimeMinutes: 0,
    note: "",
    errorMessage: "",
  };

  const input = JSON.parse(JSON.stringify(attendanceData));

  try {
    const checkIn = input.checkIn;
    const checkOut = input.checkOut;
    let breakStart = input.breakStart;
    let breakEnd = input.breakEnd;
    const overtimeApproved = input.overtimeApproved;

    if (!checkIn || !checkOut) {
      summary.status = "incomplete";
      summary.note = "Missing check-in or check-out";
      return summary;
    }

    let start = new Date(`${input.date} ${checkIn}`);
    let end = new Date(`${input.date} ${checkOut}`);

    if (isNaN(start) || isNaN(end)) {
      throw new Error("Invalid time format");
    }

    let diff = (end - start) / 1000 / 60; // minutes

    // Break handling
    if (breakStart) {
      let bStart = new Date(`${input.date} ${breakStart}`);
      let bEnd = breakEnd
        ? new Date(`${input.date} ${breakEnd}`)
        : new Date(bStart.getTime() + 30 * 60000);

      if (isNaN(bStart)) throw new Error("Invalid break start");

      let breakDiff = (bEnd - bStart) / 1000 / 60;
      diff -= breakDiff;
    }

    if (diff < 0) {
      summary.status = "invalid";
      summary.note = "Negative working hours";
      summary.totalMinutes = 0;
      return summary;
    }

    summary.status = "complete";
    summary.totalMinutes = diff;

    if (overtimeApproved && diff > 480) {
      summary.overtimeMinutes = diff - 480;
      summary.note = "Overtime included";
    } else {
      summary.note = "Normal day";
    }

    return summary;

  } catch (err) {
    summary.status = "error";
    summary.errorMessage = err.message;
    return summary;

  } finally {
    console.log("Attendance processed (finally)");
  }
}


// --------------------------------------------------
// Example Input
// --------------------------------------------------
const record = {
  employeeId: "EMP204",
  date: "2025-03-14",
  checkIn: "09:00",
  checkOut: "18:30",
  breakStart: "14:00",
  breakEnd: "14:45",
  overtimeApproved: true
};

console.log(processAttendance(record));
