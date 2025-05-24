//1-1
function sortUserName(user) { 
    users.sort((a, b) => {
        const itemA = a.firstName + (a.lastName || '') + a.customerID;
        const itemB = b.firstName + (b.lastName || '') + b.customerID;
        return itemA.localeCompare(itemB);
      });
          console.log(users);
    } 

//1-2
function sortByType(user) { 
    const professionRank = {
        systemAnalytics: 5,
        engineer: 4,
        productOwner: 3,
        freelancer: 2,
        student: 1
    };
    users.sort((a, b) => {
        return professionRank[b.profession] - professionRank[a.profession];
    });
}
    

