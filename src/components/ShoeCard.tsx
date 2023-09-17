interface ShoeProps {
  bigShoeImg: String;
  changeBigShoeImage: any;
  imgUrl: any;
}

const ShoeCard = ({ bigShoeImg, changeBigShoeImage, imgUrl }: ShoeProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "boder-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img 
        src={imgUrl.thumbnail}
        alt="shoe collection"
        width={127}
        height={103.33}
        className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
