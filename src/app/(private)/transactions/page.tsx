import { Button } from "@/components/core/button";
import { PageHeader } from "@/components/page-header";
import { PotCard } from "@/components/pot-card";
import { PotTheme } from "@/constants/enums";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Transactions"
        actions={
          <Button>
            <Plus />
            Add New Pot
          </Button>
        }
      />
    </>
  );
}
