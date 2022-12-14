import { createElement } from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { HelloWorldSample, HelloWorldSampleProps } from "../HelloWorldSample";

describe("HelloWorldSample", () => {
    const createHelloWorld = (props: HelloWorldSampleProps): ShallowWrapper => shallow(<HelloWorldSample {...props} />);

    it("should render the structure correctly", () => {
        const helloWorldProps: HelloWorldSampleProps = {
            sampleText: "World"
        };

        const helloWorld = createHelloWorld(helloWorldProps);

        expect(helloWorld.equals(<div className="widget-hello-world">Hello {helloWorldProps.sampleText}</div>)).toEqual(
            true
        );
    });
});
