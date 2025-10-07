export default function AboutPage() {
    const names = ["xxx","yyy","zzz","aaa"];
    const students = [
      {
        id:1,
        name:"xxx",
      },
      {
        id:2,
        name:"yyy",
      },
      {
        id:3,
        name:"zzz",
      }
    ];
    console.log("Names: ",names);
    // type of arr
    console.log("STudents: ",students);
  return (
    <>
    <div className="flex gap-2">
      <div>xxx</div>
      <div>yyy</div>
      <div>zzz</div>
      <div>aaa</div>
    </div>
    <div className="flex gap-2">
      {names.map((name,index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
    <div className="flex gap-2">
      {students.map((name) => (
        <p key={name.id}>{name.name}</p>
      ))}
    </div>
    </>

  );
}
