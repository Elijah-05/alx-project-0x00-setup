import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* === Size Variants === */}
      <div className="space-x-4">
        <Button title="Small" size="small" />
        <Button title="Medium" size="medium" />
        <Button title="Large" size="large" />
      </div>

      {/* === Rounded Variants === */}
      <div className="space-x-4 mt-6">
        <Button title="Rounded SM" rounded="sm" />
        <Button title="Rounded MD" rounded="md" />
        <Button title="Rounded Full" rounded="full" />
      </div>
    </div>
  );
};
export default Landing;
