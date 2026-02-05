import Section from "@/layouts/Section"
import Grid from "@/components/Grid"
import PlanCard from "@/components/PlanCard"
import TabsNavigation from "@/components/TabsNavigation"
import planGroups from "./planGroups"
import "./Plans.scss"

const Plans = () => {
  const tabsTitle = "plans-tabs"
  const tabsNavigationId = "plans-tabs-navigation"

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-title"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={
        <TabsNavigation
          id={tabsNavigationId}
          title={tabsTitle}
          items={planGroups}
        />
      }
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
