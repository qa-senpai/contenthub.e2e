function movieController(date, time, room, title) {
  const isValidDate = date === "Mon 26";
  const isValidTime = time === "19:30";
  const isValidRoom = room === "red" || room === "blue";
  const isValidTitle = title === "Lilo and Stitch";

  if (isValidDate && isValidTime && isValidRoom && isValidTitle) {
    console.log("дозволено");
  } else {
    console.log("не дозволено");
  }
}

movieController();

const check = () => {
  console.log(this);
};

const result = movieController("Mon 26", "19:30", "red1");
check();
