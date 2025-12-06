import { Button } from "@/components/core/button";
import { PageHeader } from "@/components/page-header";
import { PotCard } from "@/components/pot-card";
import { PotTheme } from "@/constants/enums";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Pots"
        actions={
          <Button>
            <Plus />
            Add New Pot
          </Button>
        }
      />
      <div className="grid grid-cols-2 gap-6">
        <PotCard
          name="Saving"
          theme={PotTheme.BROWN}
          target={1200}
          totalSave={900}
        />
        <PotCard
          name="Saving"
          theme={PotTheme.BROWN}
          target={1200}
          totalSave={900}
        />
        <PotCard
          name="Saving"
          theme={PotTheme.BROWN}
          target={1200}
          totalSave={900}
        />
      </div>
    </>
  );
}
