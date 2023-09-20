function findRoute(tickets) {
    const route = [];
    
    function dfs(city) {
      route.push(city);
      const destinations = tickets[city];
      
      if (destinations && destinations.length > 0) {
        const nextCity = destinations.shift();
        dfs(nextCity);
      }
    }
    
    dfs('Kiev'); // Starting city
    
    return route;
  }
  
  const tickets = {
    Kiev: ['Prague'],
    Prague: ['Zurich'],
    Zurich: ['Amsterdam'],
    Amsterdam: ['Barcelona'],
    Barcelona: ['Berlin'],
    Berlin: ['Kiev', 'Amsterdam'],
  };
  
  const route = findRoute(tickets);
  console.log("The route your son took is:", route.join(" -> "));
  