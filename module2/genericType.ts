//generic type
{
  type genericArr<T> = Array<T>;

  const clssRoll: genericArr<number> = [12, 76, 45, 88, 56];
  const person: genericArr<string> = ["Khalid", "Abid"];

  // Interface
  interface User {
    name: string;
    age: number;
  }

  const user: genericArr<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
  ];

  interface Friends {
    name: string;
    contact: string;
    phone: number;
  }

  const friends : genericArr <Friends>=[
    { 
        name:"Abrar",
        contact:"abc@gmail.com",
        phone:35256262,
    },
    { 
        name:"Abrar",
        contact:"abc@gmail.com",
        phone:35256262,
    }
]

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];
}
