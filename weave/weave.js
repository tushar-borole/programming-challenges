import queue from "../queue/queue";

const weave = function(queue1, queue2) {
  let resultQueue = new queue();
  const [queue1length, queue2length] = [
    queue1.get().length,
    queue2.get().length
  ];
  const highestLength =
    queue1length > queue2length ? queue1length : queue2length;
  for (let i = 0; i <= highestLength - 1; i++) {
    //add first value to the queue
    const value1 = queue1.peek();
    if (value1) {
      resultQueue.add(queue1.peek());
      queue1.remove();
    }
    const value2 = queue2.peek();
    if (value2) {
      resultQueue.add(queue2.peek());
      queue2.remove();
    }
  }

  return resultQueue;
};

const queue1 = new queue(1);
queue1.add(2);
queue1.add(3);

const queue2 = new queue("Hi");
queue2.add("Bye");

console.log(weave(queue1, queue2));
