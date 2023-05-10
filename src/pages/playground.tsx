import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/Button"));

const Playground: React.FC = () => (
  <div className="flex flex-col gap-4">
    <h1>Playground</h1>

    <div className="flex flex-col gap-3">
      <h1>Buttons</h1>
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button appearance="outlined">Outlined</Button>
      </div>
    </div>
  </div>
);

export default Playground;
