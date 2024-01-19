import { Dot } from "lucide-react";
import { Link } from "@/components/LocaleNav";
import { LinkPill } from "@/components/ui/LinkPill";

export function Resume() {
  return (
    <div>
      <header className="print-only">
        <h2>Alan Gou</h2>
      </header>
      <main>
        <section className="mb-6">
          <p className="text-2xl font-semibold max-w-xs">
            Engineer, writer, and twice a VC-backed founder.
          </p>
        </section>
        <section className="sm:pl-12 sm:pr-16 mb-4">
          <p>
            I am currently on sabbatical, taking{" "}
            <Link href="/physics/18.01sc/pset1">physics</Link> classes back at
            Columbia, skiing, and looking into healthcare and longevity.
          </p>
        </section>
        <section className="sm:pl-12 sm:pr-16 space-y-4">
          <p>
            Before that, I cofounded Revv, where we raised $5.5 million to build
            a crypto options trading exchange, and in college, I cofounded
            Palette, where we built an experimentation management platform.
          </p>
          <p>
            I started my career in SF, where my goal was to learn how to build a
            startup from the ground up, hence, I spanned many roles and touched
            all parts of the business.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold underline-offset-4 mb-2">
            Experiences
          </h3>
          <div className="space-y-4">
            {Experiences.map((experience) => {
              return (
                <div key={experience.company}>
                  <div className="flex justify-between w-full">
                    <div className="flex gap-x-1 text-lg font-medium">
                      <h4>
                        <LinkPill href={experience.companyLink}>
                          {experience.company}
                        </LinkPill>
                      </h4>
                      —<p>{experience.position}</p>
                    </div>
                    <p>
                      {experience.dates.map((date, index) => {
                        let space = "";
                        if (index !== experience.dates.length - 1) {
                          space = " — ";
                        }

                        return (
                          <>
                            <span
                              className="text-sm"
                              key={index}
                            >{`${date.month} ${date.year}`}</span>
                            {space}
                          </>
                        );
                      })}
                    </p>
                  </div>
                  {experience.content}
                </div>
              );
            })}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold underline-offset-4 mb-2">
            Education
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-lg">Columbia University — 2017</p>
          </div>
          <Subheading>B.S. in Computer Science</Subheading>
        </section>
      </main>
    </div>
  );
}

function List(props: { children: React.ReactNode }) {
  return (
    <ul className="space-y-0 list-disc list-inside text-[15px]">
      {props.children}
    </ul>
  );
}

function ListItem(props: { children: React.ReactNode }) {
  return (
    <li className="flex">
      <div>
        <Dot />
      </div>
      <div>{props.children}</div>
    </li>
  );
}

function Subheading(props: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[15px] italic text-gray-800 dark:text-gray-100/80">
      {props.children}
    </p>
  );
}

const Experiences = [
  {
    company: "Revv",
    companyLink: "https://revv.xyz",
    position: "Cofounder/COO",
    dates: [
      {
        month: "January",
        year: 2022,
      },
      {
        month: "March",
        year: 2023,
      },
    ],
    content: (
      <div>
        <Subheading>
          I wore a lot of hats. Engineering-wise, I was responsible for the
          web/mobile part of our stack. I also was in charge of our regulatory
          and compliance strategy.
        </Subheading>
        <List>
          <ListItem>
            Bulk of our engineering work was devoted to Strike, a non-custodial
            RFQ-based options exchange on Solana
          </ListItem>
          <ListItem>
            Created internal tooling to manage our Rust/TypeScript monorepo.
          </ListItem>
          <ListItem>
            Built the web app real-time RFQ flow, aggregate trade volume
            metrics, and market maker portal
          </ListItem>
          <ListItem>Built Revv and Strike{"'"}s landing pages</ListItem>
          <ListItem>
            Created regulatory strategy for Strike in collaboration with
            third-party counsel
          </ListItem>
          <ListItem>
            Cowrote our content pieces on the options industry
          </ListItem>
        </List>
      </div>
    ),
  },
  {
    company: "Kojo",
    companyLink: "https://usekojo.com",
    position: "Platform Engineer",
    dates: [
      {
        month: "August",
        year: 2020,
      },
      {
        month: "February",
        year: 2022,
      },
    ],
    content: (
      <div>
        <Subheading>
          Platform team, which handled infra, external platform, and customer
          integrations.
        </Subheading>
        <List>
          <ListItem>
            Helped build our customer-facing API platform in REST and GraphQL,
            giving our largest and most sophisticated customers the ability to
            build custom integrations with us
          </ListItem>
          <ListItem>
            Led ComputerEase ERP integration, the ERP system used by over 40% of
            our Kojo{"'"}s customers at the time
          </ListItem>
          <ListItem>
            Built out async job service, helped upgrade our database layer which
            touched every part of our codebase, and also revamped our user auth
            system across backend, mobile app, and web app
          </ListItem>
        </List>
      </div>
    ),
  },
  {
    company: "Front",
    companyLink: "https://frontapp.com",
    position: "Growth Engineer",
    dates: [
      {
        month: "July",
        year: 2019,
      },
      {
        month: "August",
        year: 2020,
      },
    ],
    content: (
      <div>
        <Subheading>
          On growth team, learning how a fast-growing startup acquires users at
          scale
        </Subheading>
        <List>
          <ListItem>
            Increased top-of-funnel conversion by double digits by improving
            trial experience and sign-up flow
          </ListItem>
          <ListItem>
            Reduced time-to-first-demo by over 30% for our sales team by adding
            in-app demo features, improving the Salesforce integration, and
            revamping the teammate invite flow
          </ListItem>
          <ListItem>
            Built out distributed jobs for our Zendesk and other competitor
            migration tools, helping us net even more customers
          </ListItem>
        </List>
      </div>
    ),
  },
  {
    company: "Affirm",
    companyLink: "https://affirm.com",
    position: "Software Engineer",
    dates: [
      {
        month: "July",
        year: 2018,
      },
      {
        month: "July",
        year: 2019,
      },
    ],
    content: (
      <div>
        <Subheading>
          On the merchant team, our B2B and integrations arm
        </Subheading>
        <List>
          <ListItem>
            Built credit waterfall exchange, which served over 20% of Affirm
            {"'"}s underwriting flows.
          </ListItem>
          <ListItem>
            Worked on core checkout, used by millions of Affirm{"'"}s online
            customers
          </ListItem>
        </List>
      </div>
    ),
  },
];
