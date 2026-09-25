import DeveloperList from "./DeveloperList";
export default function DeveloperContainer() {
const developers = [
{name: "Albert", email:"Einstein",
url:"https://es.wikipedia.org/wiki/Albert_Einstein", picUrl:"https://cdn-icons-png.flaticon.com/512/1956/1956683.png"},
{name: "Alan", email:"Turing", url:"https://es.wikipedia.org/wiki/Alan_Turing",
picUrl:"https://cdn-icons-png.flaticon.com/512/827/827364.png"}
]
return <DeveloperList developers={developers} />;
}