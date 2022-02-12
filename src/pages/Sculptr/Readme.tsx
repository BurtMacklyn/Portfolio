import { Code, H1, H2, H3, H4, H5, H6, P, Line, Li, Ul, Codeblock, Codeline } from 'src/components/Readme';

export function Readme() {
  return (
    <div className='readme'>
      <H1>Sculptr</H1>
      <P>
        Sculptr is a cli that allows users to build project scaffolding. When a user tells it to build a project, it asks them a set of questions, and based on
        their answer, it will write the correct project files. For example, if the user answered: <Code>Typescript</Code>, then, <Code>SCSS</Code>, It will
        write the code for a project using Typescript as a scripting language, and SCSS as a styling language.
      </P>
      <Line />
      <H2>Prerequisites</H2>
      <Ul>
        <Li>Npm</Li>
        <Li>Github</Li>
      </Ul>
      <Line />
      <H2>Installation</H2>
      <H3>Deno</H3>
      <Codeblock>
        <Codeline>
          $ deno install --unstable --allow-write --allow-read --allow-net --allow-run -n sculptr --allow-env -f https://deno.land/x/sculptr/src/index.ts
        </Codeline>
      </Codeblock>
      <Line />
      <H2>Build</H2>
      <H3>Step 1:</H3>
      <Ul>
        <Li>Open the folder you want to build the project in</Li>
        <Li>Run:</Li>
      </Ul>
      <Codeblock>
        <Codeline>{'$ sculptr build <platform> <name> [options]'}</Codeline>
      </Codeblock>
      <H4>For example</H4>
      <Codeblock>
        <Codeline>$ sculptr build react my-new-app --typescript</Codeline>
      </Codeblock>
      <P>
        This will make a <Code>my-new-app</Code> folder in the current working directory, and initialize the project there. You could also use:
      </P>
      <P>It will then ask:</P>
      <Codeblock>
        <Codeline>? Do you want use SCSS, Sass, or CSS? (YOUR_ANSWER)</Codeline>
      </Codeblock>
      <P>In this demo, SCSS is selected. It will then output the following</P>
      <H3>Step 2:</H3>
      <Codeblock>
        <Codeline>&nbsp;</Codeline>
        <Codeline>&nbsp;&nbsp;Wrote package.json (0.164s)</Codeline>
        <Codeline>&nbsp;&nbsp;Wrote files 17/17 (0.005s)</Codeline>
        <Codeline>&nbsp;&nbsp;Installed dependencies (26.91s)</Codeline>
        <Codeline>&nbsp;</Codeline>
      </Codeblock>
      <Line />
      <H3>How it works</H3>
      <H4>Username</H4>
      <P>
        It gets the Username for the project by running <Code>git config --global --get user.name</Code> to get the user's github name. I chose this to keep the
        cli and user experience simple, and a lot of people have github.
      </P>
      <H4>Project Name</H4>
      <P>
        Sculptr gets the project name from the parent folder; ie. if it was building a project in: <Code>/Users/{'<USER>'}/Desktop/new-project/</Code> it would
        read <Code>new-project</Code> as the project name.
      </P>
      <H4>Project Name/Username Usage</H4>
      <P>
        Sculptr uses the project name in the package.json file, and the README.md. It uses the Username in the package.json file (author), in the README.md, and
        the LICENSE file.
      </P>
      <H3>Arguments</H3>
      <Ul>
        <Li>
          <Code>{'<platform>'}</Code> The type of app that sculptr creates ('next', or 'react')
        </Li>
        <Li>
          <Code>{'<name>'}</Code> The name of the app. Could be a directory or a word, if the value for "name" is "." it uses the parent folder's name, and
          initializes in the parent folder
        </Li>
      </Ul>
      <H3>Flags</H3>
      <Ul>
        <Li>
          <Code>--skip</Code> This skips installing <Code>node_modules</Code> and doesn't run <Code>npm i</Code>
        </Li>
        <Li>
          <Code>--typescript</Code>, <Code>--ts</Code> This sets the script to typescript
        </Li>
        <Li>
          <Code>--javascript</Code>, <Code>--js</Code> This sets the script to javascript
        </Li>
        <Li>
          <Code>--scss</Code> This sets the style to scss
        </Li>
        <Li>
          <Code>--sass</Code> This sets the style to sass
        </Li>
        <Li>
          <Code>--css</Code> This sets the style to css
        </Li>
      </Ul>
      <H2>Add</H2>
      <P>Adds an asset to the current working directory</P>
      <P>Accepted values:</P>
      <Ul>
        <Li>
          <Code>tsconfig</Code>, <Code>tsc</Code>, or <Code>ts</Code>
        </Li>
        <Li>
          <Code>license</Code>, <Code>lic</Code>, or <Code>license.txt</Code>
        </Li>
      </Ul>
      <H3>Flags</H3>
      <Ul>
        <Li>
          <Code>--log</Code> Only log the file to the console instead of writing it
        </Li>
        <Li>
          <Code>--next</Code> Writes a tsconfig that caters to nextjs projects
        </Li>
        <Li>
          <Code>--react</Code> Writes a tsconfig that caters to react projects
        </Li>
        <Li>
          <Code>--overwrite</Code> Overwrites the preexisting tsconfig if it exists
        </Li>
      </Ul>
      <Codeblock>
        <Codeline>$ sculptr add tsconfig</Codeline>
      </Codeblock>
      <H4>License</H4>
      <P>With license you can add any github-supported license type. For example:</P>
      <Codeblock>
        <Codeline>$ sculptr add license wtfpl</Codeline>
      </Codeblock>
      <Codeblock>
        <Codeline>$ sculptr add license isc</Codeline>
      </Codeblock>
      <Codeblock>
        <Codeline>$ sculptr add l mit</Codeline>
      </Codeblock>
      <Codeblock>
        <Codeline>$ sculptr add l 'Academic Free License'</Codeline>
      </Codeblock>
      <Codeblock>
        <Codeline>$ sculptr add license 'GNU General Public License 3'</Codeline>
      </Codeblock>
      <H6>
        Note: <Code>l</Code> and <Code>license</Code> are interchangeable
      </H6>
      <H6>
        Note: You can use the technical name for a license <Code>Academic Free License v3.0</Code> or <Code>afl-3.0</Code>.
      </H6>
      <H6>Note: License type detection is based off of RegEx, so small typos generally can be overlooked.</H6>
      <H2>Update/Upgrade/Install</H2>
      <P>Updates sculptr to a given version (defaults to the latest)</P>
      <Codeblock>
        <Codeline>$ sculptr update</Codeline>
      </Codeblock>
      <Codeblock>
        <Codeline>$ sculptr upgrade --version X.X.X</Codeline>
      </Codeblock>
    </div>
  );
}
