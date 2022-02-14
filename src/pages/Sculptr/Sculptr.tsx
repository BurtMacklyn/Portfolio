import { App } from 'src/components';
import { Code, H1, H2, H3, H4, H5, H6, P, Line, Li, Ul, Codeblock, Codeline } from 'src/components/Readme';

export function Sculptr() {
  return (
    <App className='sculptr'>
      <div className='readme'>
        <H1>Sculptr</H1>
        <P>
          Sculptr is a cli that allows users to build project scaffolding. When a user tells it to build a project, it asks them a set of questions, and based
          on their answer, it will write the correct project files. For example, if the user answered: <Code>Typescript</Code>, then, <Code>SCSS</Code>, It will
          write the code for a project using Typescript as a scripting language, and SCSS as a styling language.
        </P>
        <Line /> <H2>Installation</H2> <H3>Deno</H3>
        <Codeblock>
          <Codeline>$ deno install --unstable -qAfn sculptr https://deno.land/x/sculptr/src/index.ts</Codeline>
        </Codeblock>
        <Line /> <H2>Build Web/Front/Frontend</H2> <H3>Step 1:</H3>
        <Ul>
          <Li>Open the folder you want to build the project in</Li> <Li>Run:</Li>
        </Ul>
        <Codeblock>
          <Codeline>{'$ sculptr build web <platform> <name> [options]'}</Codeline>
        </Codeblock>
        <H4>For example</H4>
        <Codeblock>
          <Codeline>$ sculptr build front react my-new-app --typescript</Codeline>
        </Codeblock>
        <P>
          This will make a <Code>my-new-app</Code> folder in the current working directory, and initialize the project there.
        </P>
        <P>It will then ask:</P>
        <Codeblock>
          <Codeline>? Do you want use SCSS, Sass, or CSS? (YOUR_ANSWER)</Codeline>
        </Codeblock>
        <P>In this demo, SCSS is selected. It will then output the following</P> <H3>Step 2:</H3>
        <Codeblock>
          <Codeline>&nbsp;</Codeline> <Codeline>&nbsp;&nbsp;Wrote files (21) (0.754s)</Codeline> <Codeline>&nbsp;</Codeline>
        </Codeblock>
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
        <H2>Build Api/Back/Backend</H2> <H3>Step 1:</H3>
        <Ul>
          <Li>Open the folder you want to build the project in</Li> <Li>Run:</Li>
        </Ul>
        <Codeblock>
          <Codeline>{'$ sculptr build api <platform> <name> [options]'}</Codeline>
        </Codeblock>
        <H4>For example</H4>
        <Codeblock>
          <Codeline>$ sculptr build backend oak my-new-app --typescript</Codeline>
        </Codeblock>
        <P>
          This will make a <Code>my-new-app</Code> folder in the current working directory, and initialize the project there.
        </P>
        <H3>Step 2:</H3>
        <Codeblock>
          <Codeline>&nbsp;</Codeline> <Codeline>&nbsp;&nbsp;Wrote files (16) (0.754s)</Codeline> <Codeline>&nbsp;</Codeline>
        </Codeblock>
        <H3>Arguments</H3>
        <Ul>
          <Li>
            <Code>{'<platform>'}</Code> The type of app that sculptr creates ('oak', or 'express')
          </Li>
          <Li>
            <Code>{'<name>'}</Code> The name of the app. Could be a directory or a word, if the value for "name" is "." it uses the parent folder's name, and
            initializes in the parent folder
          </Li>
        </Ul>
        <H3>Flags</H3>
        <Ul>
          <Li>
            <Code>--typescript</Code>, <Code>--ts</Code> This sets the script to typescript
          </Li>
          <Li>
            <Code>--javascript</Code>, <Code>--js</Code> This sets the script to javascript
          </Li>
        </Ul>
        <H2>Add</H2> <P>Adds an asset to the current working directory</P> <P>Accepted values:</P>
        <Ul>
          <Li>
            <Code>tsconfig</Code>, <Code>tsc</Code>, or <Code>ts</Code>
          </Li>
          <Li>
            <Code>license</Code>, <Code>lic</Code>, <Code>license.txt</Code>
          </Li>
        </Ul>
        <H3>Flags</H3>
        <Ul>
          <Li>
            <Code>--log</Code> Only log the file to the console instead of writing it
          </Li>
          <Li>
            <Code>-S</Code>, <Code>--no-strict</Code> Uses less strict typescript settings
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
        <H4>License</H4> <P>With license you can add any github-supported license type. For example:</P>
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
          Note: You can use the technical name for a license <Code>Academic Free License v3.0</Code> or <Code>afl-3.0</Code>
        </H6>
        <H6>Note: License type detection is based off of RegEx, so small typos generally can be overlooked.</H6> <H2>Update/Upgrade/Install</H2>
        <P>Updates sculptr to a given version (defaults to the latest)</P>
        <Codeblock>
          <Codeline>$ sculptr update</Codeline>
        </Codeblock>
        <Codeblock>
          <Codeline>$ sculptr upgrade X.X.X</Codeline>
        </Codeblock>
        <Codeblock>
          <Codeline>$ sculptr upgrade latest</Codeline>
        </Codeblock>
        <Codeblock>
          <Codeline>$ sculptr install X.X.X</Codeline>
        </Codeblock>
      </div>
    </App>
  );
}
