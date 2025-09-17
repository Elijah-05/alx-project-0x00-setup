import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

       {/* Size variants */}
    <div className="space-x-4">
      <Button title="Small" styles="text-sm px-3 py-1 rounded-md" />
      <Button title="Medium" styles="text-base px-4 py-2 rounded-md" />
      <Button title="Large" styles="text-lg px-6 py-3 rounded-md" />
    </div>

    {/* Shape variants with required strings */}
    <div className="space-x-4 mt-6">
      <Button title="Rounded SM" styles="px-4 py-2 rounded-sm" />
      <Button title="Rounded MD" styles="px-4 py-2 rounded-md" />
      <Button title="Rounded Full" styles="px-4 py-2 rounded-lg" />
    </div>
    </div>
  );
};
export default Landing;
