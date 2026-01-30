import Section from "@/layouts/Section"
import Button from "@/components/Button"
import "./Questions.scss"

const Questions = () => {
  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={<Button label="Ask a Question" href="/support" />}
    ></Section>
  )
}

export default Questions
