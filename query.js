const db = require("./db");
const Publisher = require("./models/publisher");
const Book = require("./models/book");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/// find book
/// create book
/// update books
/// deltete book

const createPublisher = async () => {
  const ayman = await Publisher.insertMany({
    name: "ayman",
    location: "new york",
    url: "www.aymanomer.com",
  });
  console.log("all Bulisher ", ayman);
};

const createBookofAyman = async () => {
  const ayman = await Publisher.find({ name: "ayman" });
  const aymanBook = await Book.insertMany({
    title: "nyc",
    author: "ayman omer",
    published_date: "2005",
    publisher_id: ayman[0]._id,
  });

  console.log("book of ayman ", aymanBook);
};
const updaingBook = async () => {
  const newUpdat = await Book.updateMany(
    { title: "Zen and the Art of Motorcycle Maintenance" },
    { $set: { author: " Mr :Robert M. Pirsig" } }
  );
  console.log("new update in name add mr ", newUpdat);
};
const deletingBook = async () => {
  const deleteOneBook = await Book.deleteMany({
    title: "nyc",
  });
  console.log("book deleted it ", deleteOneBook);
};
const findAllBook = async () => {
  const allbook = await Book.find({});
  console.log("all book ", allbook);
};

const run = async () => {
  await createPublisher();
  await createBookofAyman();
  await updaingBook();
  await deletingBook();
  await findAllBook();
  db.close();
};
run();
