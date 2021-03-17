import ReactHabitat                 from 'react-habitat';
import CardComp           from 'components/CardComp';
import TitleComp          from 'components/TitleComp';

class App extends ReactHabitat.Bootstrapper {
    constructor(){
        super();

        // Create a new container builder:
        const builder = new ReactHabitat.ContainerBuilder();

        // Register a component:
        builder.register(CardComp).as('CardComp');
        builder.register(TitleComp).as('TitleComp');


        // Finally, set the container:
        this.setContainer(builder.build());
    }
}

// Always export a 'new' instance so it immediately evokes:
export default new App();
