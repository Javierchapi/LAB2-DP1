export default function DeveloperRow({ developer }) {
return (
<tr>
<td className="text-center">{developer.name}</td>
<td className="text-center"> {developer.email} </td>
<td className="text-center"> <a href={developer.url}>{developer.url}</a> </td>
<td className="text-center"> <img src={developer.picUrl} alt={developer.name}
width="50px"/>
</td>
</tr>
);
}