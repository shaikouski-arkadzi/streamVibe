import Section from "@/layouts/Section"
import Grid from "@/components/Grid"
import PlanCard from "@/components/PlanCard"
import planGroups from "./planGroups"
import "./Plans.scss"

const Plans = () => {
  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-title"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    >
      <Grid columns={3}>
        {planGroups[0].items.map((planItem) => (
          <PlanCard {...planItem} key={planItem.title} />
        ))}
      </Grid>
    </Section>
  )
}

export default Plans
