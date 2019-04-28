import LinkedList from "./linked_list";

const list = new LinkedList();
list.insertFirst("First");
list.insertLast("Second");
list.insertLast("Third");
list.insertLast("Fourth");
list.insertLast("Fifth");
list.insertLast("Sixth");

const midpoint = function(list) {
  let slow = list.head;
  let fast = list.head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
//list.removeAt(1);
console.log(midpoint(list));
