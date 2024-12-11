import Image from "next/image";

export const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-[#008951] w-[952px] h-[972px] text-white flex flex-col justify-center items-center">
      <h2 className="text-[89px] font-bold">{data.title}</h2>
      <Image
        src={data.imageSrc}
        alt="photo of therapy"
        width="500"
        height="350"
      ></Image>
      <p className="text-[23px] text-center">{data.description}</p>
      <div className="h-[1px] w-[150px] border-t-2 "></div>
      <div className="text-[28px] font-medium">read more</div>
    </div>
  );
};
