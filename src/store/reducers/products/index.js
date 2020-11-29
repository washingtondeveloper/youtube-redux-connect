const INITIAL_STATE = {
  items: [
    {
      name: "Enrolado de Frango",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      price: 23.99,
    },
    {
      name: "Frango X",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      price: 16.54,
    },
    {
      name: "XZ Salada",
      image:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      price: 11.25,
    },
    {
      name: "Salada TOP 10",
      image:
        "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      price: 22.1,
    },
    {
      name: "Peixe HZ",
      image:
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      price: 15.89,
    },
    {
      name: "Carne ao molho",
      image:
        "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      price: 33.8,
    },
  ],
};

// actions

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
