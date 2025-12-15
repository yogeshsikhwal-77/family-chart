// --- family.js ---

// 1. THE DATA "DATABASE"
// This object holds all the specific info for every person.
// The keys (e.g., 'grandpa', 'bro1') match the data-id in HTML.
const memberData = {
    "grandpa": {
        name: "Ramnivas Sikhwal",
        role: "Grandfather",
        photo: "images/grandpa.jpg",
        bio: "NA",
        dob: "1943",
        location: "Bhuriyasani, India",
        occupation: "Farmar"
    },
    "grandma": {
        name: "Meera Devi",
        role: "Grand Mother",
        photo: "images/grandma.jpg",
        bio: "She is the heart of the family, known for her famous raw mango acchar.",
        dob: "1951",
        location: "Bhuriyasani, India",
        occupation: "Housewife"
    },
    "bro1": {
        name: "Suresh Sikhwal",
        role: "Oldest son",
        photo: "images/bro1.jpg",
        bio: "He work as machine operator in a bag factory in Udaipur.",
        dob: "NA",
        location: "Udaipur, India",
        occupation: "Worker"
    },
    "wife1": {
        name: "Chotu Devi",
        role: "Wife of oldest son",
        photo: "images/wife1.jpg",
        bio: "NA",
        dob: "NA",
        location: "Gotan, India",
        occupation: "Housewife"
    },
    "child1": {
        name: "Vaibhav Sikhwal (Milap)",
        role: "Grandson",
        photo: "images/child1.jpg",
        bio: "Study in 12th class",
        dob: "Jan 9, 2009",
        location: "Gotan, India",
        occupation: "Student"
    },
    "child2": {
        name: "Ritik Sikhwal",
        role: "Grandson",
        photo: "images/child2.jpg",
        bio: "Study in 6th class",
        dob: "April 2, 2014",
        location: "Gotan, India",
        occupation: "Student"
    },
    "singlebro": {
        name: "Ramesh Sikhwal",
        role: "Middle son ",
        photo: "images/singlebro.jpg",
        bio: "NA",
        dob: "NA",
        location: "Bhuriyasani, India",
        occupation: "Farmar"
    },
    "bro2": {
        name: "Parhladram Sikhwal",
        role: "smallest son",
        photo: "images/bro2.jpg",
        bio: "worked in japur, jodhpur and gotan. contact 6377463326 ",
        dob: "Feb 05, 1985",
        location: "Gotan, India",
        occupation: "Contractor"
    },
    "wife2": {
        name: "Seema Devi",
        role: "Daughter-in-Law",
        photo: "images/wife2.jpg",
        bio: "Making very tasty food everyone love it.",
        dob: "Jan 26, 1989",
        location: "Gotan, India",
        occupation: "Housewife"
    },
    "child3": {
        name: "Yogesh Sikhwal",
        role: "Grandson",
        photo: "images/child3.jpg",
        bio: "Currently study at IIT Jodhpur in btech Chemical Enginnering and loves studying and gaming and crate something crazy",
        dob: "May 6, 2007",
        location: "Gotan, India ",
        occupation: "Student"
    },
    "sister": {
        name: "Puspa Devi",
        role: "Daughter",
        photo: "images/sister.jpg",
        bio: "NA",
        dob: "NA",
        location: "Marwar Balia, India",
        occupation: "Housewife"
    },
    "husband": {
        name: "Sunil Sharma",
        role: "Son-in-Law",
        photo: "images/husband.jpg",
        bio: "NA",
        dob: "NA",
        location: "Marwar Balia, India",
        occupation: "Engineer"
    },
    "child4": {
        name: "Pinki Sharma",
        role: "Granddaughter",
        photo: "images/child4.jpg",
        bio: "Done B.A and M.A and currently studying.",
        dob: "NA",
        location: "Jaipur, India",
        occupation: "Student"
    },
    "child5": {
        name: "Anu Sharma",
        role: "Grandson",
        photo: "images/child5.jpg",
        bio: "Done B.A .",
        dob: "NA",
        location: "Mandarpur, India",
        occupation: "Housewife"
    },
    "child6": {
        name: "Anil Sharma",
        role: "Grandson",
        photo: "images/child5.jpg",
        bio: "Done B.A and multiple computor skills currently working in Hospital ",
        dob: "NA",
        location: "Marwar Balia, India",
        occupation: "Work in hospital"
    },
    "child7": {
        name: "Nitu Sharma",
        role: "Grandson",
        photo: "images/child5.jpg",
        bio: "currently pursuing B.A ",
        dob: "NA",
        location: "Marwar Balia, India",
        occupation: "Student"
    }
};

document.addEventListener("DOMContentLoaded", function() {

    // 2. LOGIC FOR INDEX PAGE (THE TREE)
    // We check if we are on the tree page by looking for member cards
    const cards = document.querySelectorAll('.member-card');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the unique ID from the data attribute
                const id = this.getAttribute('data-id');
                
                // If ID exists, go to profile page with ?id=...
                if(id) {
                    window.location.href = `profile.html?id=${id}`;
                } else {
                    alert("No data found for this member.");
                }
            });
        });
    }

    // 3. LOGIC FOR PROFILE PAGE
    // Check if we are on profile.html
    if (window.location.pathname.includes('profile.html')) {
        const params = new URLSearchParams(window.location.search);
        const memberId = params.get('id'); // Get 'grandpa' etc from URL

        // Look up the data in our "database" object above
        const person = memberData[memberId];

        if (person) {
            // Fill in the HTML elements with data
            document.getElementById('p-name').textContent = person.name;
            document.getElementById('p-role').textContent = person.role;
            document.getElementById('p-pic').src = person.photo;
            
            // Bio and Details
            document.getElementById('p-bio').textContent = person.bio;
            document.getElementById('p-dob').textContent = person.dob;
            document.getElementById('p-loc').textContent = person.location;
            document.getElementById('p-occ').textContent = person.occupation;
        } else {
            // Handle error (someone manually typed wrong URL)
            document.getElementById('p-name').textContent = "Member Not Found";
            document.getElementById('p-bio').textContent = "We couldn't find details for this family member.";
        }
    }

});
