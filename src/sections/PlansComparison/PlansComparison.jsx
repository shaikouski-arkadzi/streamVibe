import Section from "@/layouts/Section"
import Badge from "@/components/Badge"
import "./PlansComparison.scss"

const PlansComparison = () => {
  const headCells = [
    {
      children: "Features",
      width: "25%",
    },
    {
      children: "Basic",
      width: "25%",
      tabsTitle: "Basic",
    },
    {
      children: (
        <>
          Standard <Badge mode="accent">Popular</Badge>
        </>
      ),
      width: "25%",
      tabsTitle: "Standart",
    },
    {
      children: "Premium",
      width: "25%",
      tabsTitle: "Premium",
    },
  ]

  return (
    <Section
      title="Compare our plans and find the right one for you"
      titleId="plans-comparison-title"
      description="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
    ></Section>
  )
}

export default PlansComparison
