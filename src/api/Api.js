const API_KEY ="m1OfeF4TLtfskxpEmbjUCPqKz4q2"
// GET ALL THE MATCHES [UPCOMING MATCHES ]


export const getMatches = () => {
    const url= `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    
    return fetch(url)
    .then((responce) =>responce.json())
    .catch((error) => console.log("Error",error))
}
