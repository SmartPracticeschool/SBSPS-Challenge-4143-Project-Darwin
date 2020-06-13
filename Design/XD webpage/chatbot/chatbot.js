import { LitElement, html } from '@polymer/lit-element';
import { ChatbotStyle } from './chatbot.style';

export class Chatbot extends LitElement {
  static get properties(){
    return {
      
      
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  
  

  constructor(){
    super();

    
    
    
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let name;
        let id;
        let index = -1;
        const value = e.target.value;
        if (e.target.name.search("::") > -1) {
            const varCount = e.target.name.split("::").length;
            if (varCount === 2) {
                name = e.target.name.split("::")[0];
                id = e.target.name.split("::")[1];
            } else if (varCount === 3) {
                name = e.target.name.split("::")[0];
                index = e.target.name.split("::")[1];
                id = e.target.name.split("::")[2];
            }
        } else {
            name = e.target.name;
        }
        this.dispatchEvent(new CustomEvent(`${name}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                name: name,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let name;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
            name = e.target.name.split("::")[0];
            id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
            name = e.target.name.split("::")[0];
            index = e.target.name.split("::")[1];
            id = e.target.name.split("::")[2];
        }
    } else {
        name = e.target.name;
    }
    this.dispatchEvent(new CustomEvent(`${name}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            name: name,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOut(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadio(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadioGroup(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      // this.state[groupName] = value;
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeSelect(e) {
      let name;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          name = e.target.name;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${name}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  name: name,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${ChatbotStyle}
    </style>
    <div data-layer="5c756999-03f6-4a28-a0da-2a5b535cc800" class="chatbot">        <div data-layer="2706b396-17de-41d4-8423-cd0cf1da3454" class="group74">            <div data-layer="2eeb4aa6-0953-4a56-bc0a-93bb2e8f44dc" class="group69">                <svg data-layer="66c81faa-32e3-4887-8fcd-044a4fb6cbcf" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1167bcb61"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="ac54d9fa-3611-48fe-944d-026aa86cc8d0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1b754b5c5"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="f191cbf6-bc7a-4b5b-8693-eb9f896444a5" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f03aa2dd"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="83349b3f-2077-4ca7-8b52-88f3913badd1" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line17739b86f"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="51e3f92f-0e75-40fd-8a3b-0188c20a612c" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f177aeca"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="d6055768-c438-46a5-90a4-e51e4c9bfb81" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1af7259b4"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="0e8fc319-554c-4bf2-8b49-600ddb998124" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1d3802448"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="8b8c5509-e484-4777-b1da-f1a0f1e7064f" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1c135f258"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="4e90363b-3c88-40fe-b98c-e61dd02b643d" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line181c3cc02"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="1416314d-9a3a-458e-8724-52a281e7beb0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1024ab50b"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="c0d360f3-219d-4936-834d-73b2eb0981de" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line15bdbbb81"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="4ea9c264-88c9-4157-ab79-add65fb4dfd6" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f65a98b1"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="1f397c79-a475-485e-a135-cfd657b53cf3" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line197f44ac1"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="bf5da630-6055-400f-853b-83822eddc1f0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line158d3dd1d"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="bff7ca2e-0a19-4db3-8a53-77c550e0a89f" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line15ea4020e"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="39e934cc-a7f7-405f-a69d-6f01246ef15b" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ac12a507"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="d9a46a91-4ce8-4e66-981c-ca32739dfee5" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f251b5bf"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="baf0a983-1636-4891-9833-c8bf9852be47" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1fced479f"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="2b982594-fffe-4557-940d-5206cfddffc9" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ec429465"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="1f459836-7e69-4741-a3f6-f4da8a470974" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line19668a967"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="6974db6e-8c2e-4d9e-9c97-38fb6e90d847" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line198c38ede"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="21290db7-39a5-4930-aacd-a25a9bc735e3" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1054756d2"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="e0758d2b-a2a5-4c1e-8e30-05aa62274386" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line19a0ab2b6"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="1f522cd3-36fa-4d89-9a18-6d75ec702924" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line189ecb90b"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="931471f9-cef3-4850-a40b-938ce061feff" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1d3789fa3"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="fdd9a399-7384-4665-9fe8-81aba212c9f0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f68dba19"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="3136c822-beb8-4536-b685-d994342e38f4" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1655c49bb"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="110ff02c-03c2-4f87-a0bc-c4bd410ae82c" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line10f6f10af"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="6bb3eb75-075a-4e5d-93af-e34840fd6fd9" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1321e0762"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="b4b48b93-3e6e-4745-b8df-110dc9c2db7d" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1206ab9d1"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="b65068b5-3b0c-4ee7-bfbe-31011823c7c9" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line11814826a"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="c0c9f2ba-912f-46dd-8bfb-824b6f864d6a" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line19a0605e2"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="f9adbce5-53d9-485c-ba4c-83e1c8c1b2f4" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line14f2ee706"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="7a9c3860-9cc1-4d82-b858-ab642dfafb7f" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1a4337207"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="ffbc6a2b-dab4-4f00-aa3d-091b549a5894" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1a43b82df"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="44061099-1d2c-4fbf-a7b5-f6cde309a35d" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line10b90086b"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="5bb926b6-0801-4924-9247-b2a7f6abc3f4" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line133278758"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="af43f829-5539-4c3a-b061-bc3658c2d3e0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line13416b229"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="fe826bb0-6900-4f92-a959-f5141b81b29f" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1abbe59d9"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="9c0f2c11-9352-42a6-8b00-4631f3c9d9a8" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1d7b6f17a"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="cf48f8e9-7a96-4722-a2c7-a5a24618b6d7" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line137ddf560"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="b6505365-1a06-4de3-ab97-93da815e245a" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ef69ff14"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="2f7f56eb-a12a-4499-8482-2f9165045828" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1786a92ca"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="28b5cc10-ce0c-4dba-89c2-92f0596c7ce2" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line19e8cc391"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="9fb29f3b-66ae-415a-a304-48fe3e641ae5" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line19c07fc24"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="6daf546c-581f-4c54-ab0d-f3d169f829f7" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line14f37490f"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="7cee28b6-89aa-4d70-bfa9-e0aec343c321" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1a7830283"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="24cf7b7a-8807-4911-8f2a-c9159fd5613b" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ca42d9fd"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="dce71b97-f881-485c-9421-766d69532790" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line12c1111c7"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="5967dc60-f07d-4a98-8d27-280f015087b6" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line15c5930d3"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="4d38cb9b-8435-4eea-a94f-767a06cb1090" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ed4fe53f"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="5583b847-d3aa-4c78-b6a3-db5d072ddf37" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1d9b0e74d"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="f8050e38-bc31-466a-b1db-4039ff7bad06" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line133012dd3"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="540ca854-8898-4f57-a7c4-1fbf8971dcd0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1e8b0c1df"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="f019f4d7-8748-438b-8bc3-4f8991934e06" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line141344fd4"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="3e55b392-732a-4244-b97c-a1ada02e01d3" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line15bc03adf"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="8b3384d7-90f0-4b3d-9325-d5b9d05e24ee" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1664b1c19"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="e4e22699-b24a-4e69-afc7-31d15cbb5880" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line170505946"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="40961248-2e3c-4a37-863b-77b291326f72" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line18603e9dc"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="76f3a4dd-2dca-4115-81db-b0265f7cb366" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line195d5f603"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="dda27e50-2120-4c40-a2fa-bf3af9349ec3" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1b1d6d9f3"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="be6a120a-00f7-407b-92c2-5674b4547e61" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1439e0075"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="d2b9da16-86e8-4538-a021-4813f1b1db01" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1514fbe8b"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="e9ed825e-8705-4f9b-b375-09a1d3bd9e10" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line112df7b6f"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="819957fd-f272-4ebd-a191-a17059c0bb67" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line120a96988"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="61e612ba-08a6-4b87-aac4-59e1ef48de2f" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line155f360a9"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="737e833b-b4c3-45b4-937e-dcd22121d619" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line160c2d03c"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="ab1fa026-5dd1-4fb0-80ab-9aed641f91f4" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ec1a168b"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="04f4add3-54dc-45b8-8af9-9bff9e8fb36b" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1cb4a993c"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="283667de-198e-41e2-a8dd-6414c16bbab8" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ebe2eacc"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="d5bb12db-fe14-4928-8ebf-3f32cfc766ae" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1e2763730"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="81d5b3e7-689e-4edd-af15-b21c7b00ef13" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1d3db76e4"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="579562c2-d06f-42ef-b6b0-0e6d5ff29cc0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line144d7a2f6"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="bb39f491-45ce-474e-b6e4-31075ac52078" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line10edb92b1"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="03b70233-5cd4-46e0-aa9a-59682530097b" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f00db4ba"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="e15e5a97-cab1-42f0-927b-030e28cc3444" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1bbad23f5"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="f8ba64b5-6b71-4a61-a115-c7d95e2d1d11" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f34b71f7"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="af5bea7a-d21b-461a-b8c5-d4aac87398e5" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ef7e7492"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="59d5ee64-0d44-4792-b83f-25379cafe9b9" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line13a755600"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="83f8432b-16f1-4f96-92e4-aac4ef3654fa" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1213725dc"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="a164bb82-c9cc-4fe4-a982-7f6af16f83f6" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line10de90bc6"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="7c03d5f8-af96-4224-b491-a8c40f27b22c" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ccb34de5"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="d9d7fed4-83cf-4421-acb6-b289516b5d0b" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line145fb5a05"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="4b619999-9d38-4674-996e-373d2a7c3695" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line189069fd0"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="a2bd5807-69a3-4df1-8b1b-c0dc30baf0b1" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line124bf86d3"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="0c7438a0-b58c-4b43-8b4b-2ab8a68e05c0" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line10074052d"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="35678b0f-a130-41d5-82e5-a804f0549a40" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1454925b6"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="1aeeca8c-182e-4d79-bb89-71f5666909b8" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line124d2b5f0"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="2612868c-f604-4a33-bc72-c18a07c62edf" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1ceaf0093"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="3c46cb12-b8fb-43f9-a88d-71946c8dbce5" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line1f88555e2"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
                <svg data-layer="738e429e-8559-45fa-bebc-5baa6fd6bccc" preserveAspectRatio="none" viewBox="-0.5 0 1 2337.472412109375" class="line117c0e330"><path d="M 0 0 L 0 2337.472412109375"  /></svg>
</div>
            <div data-layer="5576eb78-a1a2-4589-a940-0b251523e668" class="group70">                <svg data-layer="e5136477-4ffe-4620-a84e-9c66393405a4" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line19fbf471d"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="5ff8efba-dfab-46b0-9f44-3c74c65de82a" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line12a2b6923"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="69eee6c1-b59a-4d16-b9fc-0125c6d542dd" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b79dad6c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="9f5c7614-1be2-49dd-990c-95508f771658" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1d020c858"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ad4578e2-2370-4cad-8db1-aae9cd0b24d9" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1a3437163"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="f395b69e-a893-4c07-b77e-ffddb425b5a1" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1abf35011"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="f43f6986-f6b6-4daf-8ce9-4d6fa0d18a75" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1119aa66c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="de9ef648-5058-4bda-9961-a0218b537734" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1c1d451b7"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="351a0a96-93f7-4bfd-80a7-3e9a669ac52a" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1224b6f6a"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="69eb79f3-ebe4-4da0-94fd-9856805b10f5" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line15b317606"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="d7b51203-6481-4255-a41c-ccf12c8078b8" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line17f323fdf"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="4deca78b-5890-425d-8911-8e68c19e71d7" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line14cb37f06"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="000cc42e-9659-4540-8c34-51365d2d77c2" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line173863a29"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="a2d5f9ff-07f0-425f-a45c-a25d9ebf5134" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line195f88143"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="8b3c7de0-4be2-4ec5-8386-10fef89fac59" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b79a457a"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="736c994d-230b-4120-85c6-9cdd3c89eae1" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line15133db06"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="e053ee85-1063-40f8-8098-43424cf51b17" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line136c37a98"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="0f76b5f9-5a7c-4be2-942a-9668f9efe8cf" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1be7b969d"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="eca728bc-4405-43bc-86f5-6590a160e216" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line11839215c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="b1df0220-d9f2-49e3-aead-0f3c53477d19" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line17d4b676f"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="6bd94ceb-3112-48fc-8185-970f417398d0" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line190e8db11"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="c1624b6f-879f-456d-af49-90d532002afb" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line13313377e"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="6ffa069a-d08a-46c0-a10e-8a37dc252529" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1571244d2"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="83e8496a-bf6b-42d2-a035-acac4072946f" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line108b3a716"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ab432919-9a7a-4295-8c88-08ae4decac5d" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line146c46e6f"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="cfd88b1c-0390-4a50-944e-e79d32f020ad" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line14af27c71"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="aba8911c-5fca-4594-af66-2d1aaca95121" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b2626bc2"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ca53642f-9cba-4d5e-8b98-5febc3d4e8a3" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line12d4058b6"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="9d6a8d73-2071-47e4-9e14-632c0d252ea3" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1fc06ad54"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ebdf4af1-93f2-44f1-b2e5-7c8ac5b45c9c" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line12dce327d"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="843cd71b-0752-4a5a-8f19-6d038b8ee6b3" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1393bd87f"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="993a80e8-85dc-439f-ba97-ed5de21ec513" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b8e98572"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="7308ceec-2e16-4815-a9f5-6d4526375c34" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line142849bb8"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="084d3a8b-19e6-4c99-82ac-27e5a35dcebc" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b8f64c73"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ed3cbb84-4082-473f-a565-7cc32e4c37b9" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line17b6005c4"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="722bceae-1f08-4108-8e8c-f0c1bd648a83" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1ff475a5b"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="adceb701-fe15-447b-9b8f-726534931780" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line10566d082"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="a6c1967a-43a1-4150-86b2-53e60e14a990" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line139a74bd4"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="28562c1d-b4f7-4de0-bdd1-608444863d0d" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line14034f01c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ee44559d-6e87-4dd5-8752-be62c73fd249" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line196f790a4"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="da39a121-5377-4d16-84d7-2e374eab3494" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line161416902"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ab19a1d6-8716-4641-8394-12c5137f52a1" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b265385a"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="96b5c15d-a07e-4875-81f5-eaf5f5381927" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line130ee3905"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="188eb128-590c-47fe-a595-78335c780c36" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line19db3b0e2"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="1c0c4ce3-d5d8-4e9f-a547-55da06172d7a" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line133626e56"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="f8ab0bfd-3bd0-4c1b-b150-d89db4e781b9" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line16a05958d"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="3c5c0eea-9bc2-404d-861f-4cb2d600bec6" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1f0b704f6"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ac11f38c-494a-4f98-8518-80c0aa62ac91" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1dd3fd28f"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="d30fb86f-b746-4a65-9c1e-87a5b8aea74d" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line162d682ac"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="1babe393-8f83-4d0f-9549-a58425791aac" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1a720088a"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="ddb0c132-7e02-4c4c-b512-c59b17e61076" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line147d0c0b2"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="f7c121ef-d77c-4f77-a284-6500be043cfc" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line16470697c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="d6126ae4-f893-4e06-af85-d0dfa72eddea" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line17c84d084"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="b184df87-8001-4032-b99f-98cc895b9cb3" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line18ff655a7"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="28cddda8-7de7-4930-b958-9ac2777c3605" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1dad866f5"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="a717c02b-dd8d-4e66-b7ae-93edfdacb994" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line14d8fe275"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="6a39fab1-a9d7-4ee3-8497-22003d7b4f0a" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1f09c6d12"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="c3069e51-4fcd-40cb-8f6e-4c1dfee5ce7e" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line14592e825"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="7b00b86e-ab1d-40d3-97a0-f24f295c1a3f" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1179ab1e2"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="779cb2da-97fa-433f-ac64-7d22c9a5099d" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line15a3bd2cb"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="7df65175-f946-4826-93aa-70af60d70a65" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b75f965c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="9b259a51-5210-43d5-9f24-14234766b69b" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1a48f6fb4"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="cc263424-ad13-4262-84cd-90244598f9fe" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b4e762cf"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="7a4fc871-22c7-4f5f-8659-b73734a3f903" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1842f3365"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="6eb8616b-3a1c-40b8-93fc-8162504bb11b" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line13e4085ae"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="4b1e8750-2524-4bc3-aea9-9b4542488e26" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line167823bd1"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="4e3aa607-394e-4288-8de9-7fa4c44db856" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1165ee075"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="7a740833-39a9-4ee2-9d50-4202e16fe6ec" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line15c913850"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="7a5cde9b-26f8-443d-86be-cd80c31f50bc" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line17fa74566"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="e1307593-06e6-4ed6-b93d-79ec94bf91c2" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1d3c0be70"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="c43c715a-1d90-47e8-9334-25ad00979cd1" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1f2152907"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="2eb1b50c-2504-4069-b6ef-7f1cbf58984b" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line13781cdef"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="98ad8968-c68f-4d9d-b9f4-c5857f8e2b67" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1918771a1"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="e7936068-d68e-4452-89b9-ebacf3739b76" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line11aae8618"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="fc3da9b2-943a-4aab-8527-282b9b4faeb5" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1663a59e4"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="bfa4524e-41f6-4dea-9592-68f171bf554e" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1a011fa87"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="28e87b98-7184-4428-b820-eb15dadfb555" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1cafc1411"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="72ca718d-b6fb-48a9-aa4f-78879aa0ad98" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1fcf4e512"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="6471f1cf-b913-4f6a-aee5-f268adec70e5" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line17df1254b"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="bc8dc0f6-ba2f-421d-ab56-3c7d1db8170e" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1bca1fa0c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="7b42153b-0ebf-43b9-b56b-3a9683283889" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line150ec6f3b"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="b494dd4d-b82e-407f-80f7-1af37a66250f" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1663d757a"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="2c4e8251-c498-49fd-bc0a-8944cbfbafb8" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1d1c5dd49"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="603db686-37bc-4686-8c7d-4959034988af" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b4b1dd8a"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="b36d56f0-7522-49f7-b9e6-0f1fe0d1198e" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line147dfe2b8"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="53475034-08b1-4510-90f1-d9f8ab4d1cf0" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1bb35ea6d"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="b0d2f90d-916e-4c01-8da8-03203bbab2f5" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1b5e070e4"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="f37cd5bd-090b-496f-b1d3-497b9f543989" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line184991e14"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="cbc98620-246a-4646-b22d-5f6692828bf5" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1fd6dc41c"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="4b7d4a9b-ba8e-441f-8edb-0a0b841260c1" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line19f9271f9"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
                <svg data-layer="6789a36e-9d56-4c96-9292-9c50214c2de7" preserveAspectRatio="none" viewBox="-0.5 0 1 3091.0458984375" class="line1"><path d="M 0 3091.0458984375 L 0 0"  /></svg>
</div>
</div>
        <div data-layer="d59f1619-d145-4468-8e65-1eb45c7aa318" class="rectangle1092"></div>
        <div data-layer="fcf10427-2455-44dd-aaf9-c753a6200b52" class="rectangle1091"></div>
        <div data-layer="47a0c277-728c-46ac-8c1d-f764ab9b384f" class="rectangle1090"></div>
        <div data-layer="61bbe8bd-5c8c-43bd-9e52-cc3537da08bb" class="browseMoreJobs">BROWSE MORE JOBS</div>
        <div data-layer="78332624-4e93-4529-a4b5-f72ff526dc00" class="done">DONE</div>
        <div data-layer="53802102-4f55-4e70-a0f4-71ba9dbfcf14" class="group93">            <div data-layer="8ff7f5f9-f544-455e-b57b-a5504f86a957" class="goBack">Go Back</div>
            <svg data-layer="5f821c9b-92ed-434f-b124-20f6fce1fadd" preserveAspectRatio="none" viewBox="11.250579833984375 6.1936469078063965 20.69580078125 36.20001220703125" class="iconIonicIosArrowBack"><path d="M 17.48935508728027 24.2889404296875 L 31.18643760681152 10.60263538360596 C 32.19943618774414 9.589633941650391 32.19943618774414 7.951587677001953 31.18643760681152 6.949362754821777 C 30.17343330383301 5.936360836029053 28.53538703918457 5.947136878967285 27.52238845825195 6.949362754821777 L 12.00405788421631 22.4569149017334 C 11.02338409423828 23.43758583068848 11.00183391571045 25.0109748840332 11.92862129211426 26.02397537231445 L 27.51161003112793 41.63929748535156 C 28.01811408996582 42.14579772949219 28.6862678527832 42.39366149902344 29.34363746643066 42.39366149902344 C 30.00101089477539 42.39366149902344 30.66916084289551 42.14579772949219 31.1756649017334 41.63929748535156 C 32.18865966796875 40.62629318237305 32.18865966796875 38.98825073242188 31.1756649017334 37.98602294921875 L 17.48935508728027 24.2889404296875 Z"  /></svg>
</div>
        <div data-layer="c3d9c04f-33a4-4e22-a1aa-f3f05ad177d0" class="group581">            <div data-layer="a5122e84-1177-4ab6-a018-a6cede5ba946" class="group16">                <div data-layer="5ba5b92e-ff59-490c-9003-e4c78f504378" class="chatBot86498dc7">                    <svg data-layer="6fa6c2ca-edb4-4d01-8435-ca4a394055c2" preserveAspectRatio="none" viewBox="0 0 103 103" class="ellipse164fb4f2cd"><path d="M 51.5 0 C 79.94266510009766 0 103 23.05733680725098 103 51.5 C 103 79.94266510009766 79.94266510009766 103 51.5 103 C 23.05733680725098 103 0 79.94266510009766 0 51.5 C 0 23.05733680725098 23.05733680725098 0 51.5 0 Z"  /></svg>
</div>
                <div data-layer="4c92b8fb-69c1-47db-b4aa-cbc8e65d638e" class="chatBotaa5c2dfa">                    <svg data-layer="b95da0df-1dab-42cc-a59d-7a055da70be9" preserveAspectRatio="none" viewBox="0 0 103 103" class="ellipse1607859219"><path d="M 51.5 0 C 79.94266510009766 0 103 23.05733680725098 103 51.5 C 103 79.94266510009766 79.94266510009766 103 51.5 103 C 23.05733680725098 103 0 79.94266510009766 0 51.5 C 0 23.05733680725098 23.05733680725098 0 51.5 0 Z"  /></svg>
</div>
                <div data-layer="9cdb62ce-4cfc-4933-8573-c323b05bc712" class="component54">                    <svg data-layer="ae57d5d3-6816-4746-a07c-e4ce46aeda7a" preserveAspectRatio="none" viewBox="0 0 103.088134765625 102.5753173828125" class="path37ce233555"><path d="M 51.54410934448242 0 C 80.01113891601562 0 103.0882186889648 22.9622745513916 103.0882186889648 51.28767395019531 C 103.0882186889648 79.61305999755859 80.01113891601562 102.5753479003906 51.54410934448242 102.5753479003906 C 23.07708549499512 102.5753479003906 0 79.61305999755859 0 51.28767395019531 C 0 22.9622745513916 23.07708549499512 0 51.54410934448242 0 Z"  /></svg>
                    <div data-layer="7662e2d2-3ce0-437a-851d-19ffb4bb41c0" class="symbol6380e05755">                        <svg data-layer="3021f1a7-28c0-4297-8d15-7ce1fe338470" preserveAspectRatio="none" viewBox="0 0 47.705322265625 47.48291015625" class="union1e83d0dab"><path d="M 0 47.48293304443359 L 0 41.54821395874023 C 0 35.01792526245117 10.73358535766602 29.67610931396484 23.85270690917969 29.67610931396484 C 36.97183227539062 29.67610931396484 47.70541381835938 35.01792526245117 47.70541381835938 41.54821395874023 L 47.70541381835938 47.48293304443359 L 0 47.48293304443359 Z M 11.92501258850098 11.87210178375244 C 11.92501258850098 5.315086841583252 17.26497268676758 0 23.85270690917969 0 C 30.4377613067627 0 35.7777214050293 5.315086841583252 35.7777214050293 11.87210178375244 C 35.7777214050293 18.4263801574707 30.4377613067627 23.7414665222168 23.85270690917969 23.7414665222168 C 17.26497268676758 23.7414665222168 11.92501258850098 18.4263801574707 11.92501258850098 11.87210178375244 Z"  /></svg>
</div>
</div>
                <div data-layer="f49aec67-7d1d-48ba-9b60-db4d72bcf768" class="component55">                    <svg data-layer="708e28aa-913b-4741-8e95-460393edb216" preserveAspectRatio="none" viewBox="0 0 103.088134765625 102.5753173828125" class="path37fe1376d2"><path d="M 51.54410934448242 0 C 80.01113891601562 0 103.0882186889648 22.9622745513916 103.0882186889648 51.28767395019531 C 103.0882186889648 79.61305999755859 80.01113891601562 102.5753479003906 51.54410934448242 102.5753479003906 C 23.07708549499512 102.5753479003906 0 79.61305999755859 0 51.28767395019531 C 0 22.9622745513916 23.07708549499512 0 51.54410934448242 0 Z"  /></svg>
                    <div data-layer="5388eafe-0b0c-4402-bcd1-1556db3efccb" class="symbol63b4abce0f">                        <svg data-layer="abff4e89-aef2-4df8-9342-44cc472eef0e" preserveAspectRatio="none" viewBox="0 0 47.705322265625 47.48291015625" class="union16ad6bed3"><path d="M 0 47.48293304443359 L 0 41.54821395874023 C 0 35.01792526245117 10.73358535766602 29.67610931396484 23.85270690917969 29.67610931396484 C 36.97183227539062 29.67610931396484 47.70541381835938 35.01792526245117 47.70541381835938 41.54821395874023 L 47.70541381835938 47.48293304443359 L 0 47.48293304443359 Z M 11.92501258850098 11.87210178375244 C 11.92501258850098 5.315086841583252 17.26497268676758 0 23.85270690917969 0 C 30.4377613067627 0 35.7777214050293 5.315086841583252 35.7777214050293 11.87210178375244 C 35.7777214050293 18.4263801574707 30.4377613067627 23.7414665222168 23.85270690917969 23.7414665222168 C 17.26497268676758 23.7414665222168 11.92501258850098 18.4263801574707 11.92501258850098 11.87210178375244 Z"  /></svg>
</div>
</div>
                <div data-layer="344c0ba4-91d4-4116-9e28-4d965b72eb8f" class="messagef5c6687d">                    <svg data-layer="ae123d12-b243-4a96-bba7-f47566038146" preserveAspectRatio="none" viewBox="0 -1.999999761581421 287.60009765625 75.5" class="path112d51fa428"><path d="M 10.55413246154785 73.49999237060547 L 287.60009765625 73.49999237060547 L 287.60009765625 -1.999999761581421 L 10.55413246154785 -1.999999761581421 L 10.55413246154785 24.96428108215332 L 0 35.74999237060547 L 10.55413246154785 46.53570556640625 L 10.55413246154785 73.49999237060547 Z"  /></svg>
</div>
                <div data-layer="61c4cdb2-6eec-478a-9056-54dd21b0ba0c" class="messagef89b3c72">                    <svg data-layer="973c8a4e-0de4-47ac-970a-6838eee3adbd" preserveAspectRatio="none" viewBox="0 -1.999999761581421 406 142.86669921875" class="path1127dc0a26b"><path d="M 14.89908218383789 140.86669921875 L 406 140.86669921875 L 406 -1.999999761581421 L 14.89908218383789 -1.999999761581421 L 14.89908218383789 49.0238151550293 L 0 69.43334197998047 L 14.89908218383789 89.84286499023438 L 14.89908218383789 140.86669921875 Z"  /></svg>
</div>
                <div data-layer="ee56a2fe-5bcf-4954-b032-506e3325fd7a" class="message0871a2cc">                    <svg data-layer="0305d0f8-039f-45b8-a03d-c644623915b6" preserveAspectRatio="none" viewBox="0 -2 639.1416015625 210.48486328125" class="path11255ba78aa"><path d="M 615.6869506835938 208.48486328125 L 0 208.48486328125 L 0 -2 L 615.6869506835938 -2 L 615.6869506835938 73.17315673828125 L 639.1416625976562 103.2424240112305 L 615.6869506835938 133.3116912841797 L 615.6869506835938 208.48486328125 Z"  /></svg>
</div>
                <div data-layer="add35450-2502-4be0-8d6d-39b4c94c8852" class="messagedff12e77">                    <svg data-layer="54103cba-f882-4302-88b0-f57d00c97406" preserveAspectRatio="none" viewBox="0 -2 819.387451171875 210.48486328125" class="path112b44a36d4"><path d="M 789.3182373046875 208.48486328125 L 0 208.48486328125 L 0 -2 L 789.3182373046875 -2 L 789.3182373046875 73.17315673828125 L 819.3875122070312 103.2424240112305 L 789.3182373046875 133.3116912841797 L 789.3182373046875 208.48486328125 Z"  /></svg>
</div>
</div>
            <div data-layer="47d717c0-a930-49ae-a472-4a05718b680b" class="group17">                <div data-layer="8771a8dd-b08b-4230-96d7-8e9e3c9ee462" class="chatBot019d97f5">                    <svg data-layer="cc7e534c-ddde-4dd2-ab0a-ae9823639260" preserveAspectRatio="none" viewBox="0 0 103 103" class="ellipse16f1a7d08f"><path d="M 51.5 0 C 79.94266510009766 0 103 23.05733680725098 103 51.5 C 103 79.94266510009766 79.94266510009766 103 51.5 103 C 23.05733680725098 103 0 79.94266510009766 0 51.5 C 0 23.05733680725098 23.05733680725098 0 51.5 0 Z"  /></svg>
</div>
                <div data-layer="329bd3eb-4f6a-4057-ae7d-57830ddacfa5" class="chatBot">                    <svg data-layer="48bbc0cf-99fe-4d85-bc77-727b8d1db118" preserveAspectRatio="none" viewBox="0 0 103 103" class="ellipse16"><path d="M 51.5 0 C 79.94266510009766 0 103 23.05733680725098 103 51.5 C 103 79.94266510009766 79.94266510009766 103 51.5 103 C 23.05733680725098 103 0 79.94266510009766 0 51.5 C 0 23.05733680725098 23.05733680725098 0 51.5 0 Z"  /></svg>
</div>
                <div data-layer="a7ae59cf-4857-412f-b069-76630edf17b8" class="component56">                    <svg data-layer="9e8ee4c4-ae39-4571-b5d1-60e79da454b0" preserveAspectRatio="none" viewBox="0 0 103.088134765625 102.5753173828125" class="path37"><path d="M 51.54410934448242 0 C 80.01113891601562 0 103.0882186889648 22.9622745513916 103.0882186889648 51.28767395019531 C 103.0882186889648 79.61305999755859 80.01113891601562 102.5753479003906 51.54410934448242 102.5753479003906 C 23.07708549499512 102.5753479003906 0 79.61305999755859 0 51.28767395019531 C 0 22.9622745513916 23.07708549499512 0 51.54410934448242 0 Z"  /></svg>
                    <div data-layer="4c5fd3bc-2f65-4641-8825-a6147e4344f6" class="symbol63">                        <svg data-layer="3a78d0e9-a826-4596-8236-c9292919a223" preserveAspectRatio="none" viewBox="0 0 47.705322265625 47.48291015625" class="union1"><path d="M 0 47.48293304443359 L 0 41.54821395874023 C 0 35.01792526245117 10.73358535766602 29.67610931396484 23.85270690917969 29.67610931396484 C 36.97183227539062 29.67610931396484 47.70541381835938 35.01792526245117 47.70541381835938 41.54821395874023 L 47.70541381835938 47.48293304443359 L 0 47.48293304443359 Z M 11.92501258850098 11.87210178375244 C 11.92501258850098 5.315086841583252 17.26497268676758 0 23.85270690917969 0 C 30.4377613067627 0 35.7777214050293 5.315086841583252 35.7777214050293 11.87210178375244 C 35.7777214050293 18.4263801574707 30.4377613067627 23.7414665222168 23.85270690917969 23.7414665222168 C 17.26497268676758 23.7414665222168 11.92501258850098 18.4263801574707 11.92501258850098 11.87210178375244 Z"  /></svg>
</div>
</div>
                <div data-layer="643c9719-e2d2-43f2-8064-e8bb940beacf" class="message0ba6ed63">                    <svg data-layer="2252cbba-3568-4ab4-b1e3-517ed88b055e" preserveAspectRatio="none" viewBox="0 -1.999999761581421 547.866455078125 151.611083984375" class="path1128d9fb36b"><path d="M 20.10519027709961 149.6110687255859 L 547.866455078125 149.6110687255859 L 547.866455078125 -1.999999761581421 L 20.10519027709961 -1.999999761581421 L 20.10519027709961 52.14680480957031 L 0 73.80552673339844 L 20.10519027709961 95.46424865722656 L 20.10519027709961 149.6110687255859 Z"  /></svg>
</div>
                <div data-layer="2cacd478-34fe-4c36-85b3-743a9a82e5c1" class="message65533b17">                    <svg data-layer="7b9a5387-d5a4-481e-966b-c32c14e9b5fc" preserveAspectRatio="none" viewBox="0 -1.999999761581421 250.800048828125 79.5333251953125" class="path1127b34c5a0"><path d="M 9.203671455383301 77.53333282470703 L 250.8000335693359 77.53333282470703 L 250.8000335693359 -1.999999761581421 L 9.203671455383301 -1.999999761581421 L 9.203671455383301 26.40475654602051 L 0 37.76665878295898 L 9.203671455383301 49.12856292724609 L 9.203671455383301 77.53333282470703 Z"  /></svg>
</div>
                <div data-layer="e2d1f3c8-5a78-4e6f-b01d-b9f2076edae7" class="message">                    <svg data-layer="ed754798-d2a9-44cc-aea9-b5ca52ffa399" preserveAspectRatio="none" viewBox="0 -2 819.387451171875 210.48486328125" class="path112"><path d="M 789.3182373046875 208.48486328125 L 0 208.48486328125 L 0 -2 L 789.3182373046875 -2 L 789.3182373046875 73.17315673828125 L 819.3875122070312 103.2424240112305 L 789.3182373046875 133.3116912841797 L 789.3182373046875 208.48486328125 Z"  /></svg>
</div>
</div>
            <div data-layer="85e1a79e-c241-48c3-a327-0baf23ce7da5" class="thankYou">Thank You</div>
            <div data-layer="b0cacc2e-f8db-43d4-891b-d20cc7690604" class="inConsequatQuamIdSodalesHendreritErosMiMolestieLeoNecLaciniaRisusNequeTristiqueAugueProinTempusUrnaVelCongueElementumVestibulumEuismodAccumsanDuiAcIaculisSemViverraEuDonecConvallisElitVitaeOrnareCursusLiberoPuee183c87">In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus, libero purus facilisis felis, a volutpat metus tortor bibendum elit. Integer nec mi eleifend, fermentum lorem vitae, finibus neque. Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus tempor dolor vel odio efficitur, ac sollicitudin ipsum feugiat. Proin feugiat aliquet turpis, et rhoncus nibh elementum quis.</div>
            <div data-layer="b1ad0b64-e231-4e6d-add8-bc8842b50b2c" class="inConsequatQuamIdSodalesHendreritErosMiMolestieLeoNecLaciniaRisusNequeTristiqueAugueProinTempusUrnaVelCongueElementumVestibulumEuismodAccumsanDuiAcIaculisSemViverraEuDonecConvallisElitVitaeOrnareCursusLiberoPu03e7c8de">In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus, libero purus facilisis felis, a volutpat metus tortor bibendum elit. Integer nec mi eleifend, fermentum lorem vitae, finibus neque. Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus tempor dolor vel odio efficitur, ac sollicitudin ipsum feugiat. Proin feugiat aliquet turpis, et rhoncus nibh elementum quis.</div>
            <div data-layer="08c65a99-4981-4292-bd13-893f5f7df623" class="inConsequatQuamIdSodalesHendreritErosMiMolestieLeoNecLaciniaRisusNequeTristiqueAugueProinTempusUrnaVelCongueElementumVestibulumEuismodAccumsanDuiAcIaculisSemViverraEuDonecConvallisElitVitaeOrnareCursusLiberoPud9a71992">In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus, libero purus facilisis felis, a volutpat metus tortor bibendum elit. Integer nec mi eleifend, fermentum lorem vitae, finibus neque. Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus tempor dolor vel odio efficitur, ac sollicitudin ipsum feugiat. Proin feugiat aliquet turpis, et rhoncus nibh elementum quis.</div>
            <div data-layer="594b28ae-11e6-4fd2-a630-db2944249d9c" class="inConsequatQuamIdSodalesHendreritErosMiMolestieLeoNecLaciniaRisusNequeTristiqueAugueProinTempusUrnaVelCongueElementumVestibulumEuismodAccumsanDuiAcIaculisSemViverraEuDonecConvallisElitVitaeOrnareCursusLiberoPu7e13cdd0">In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus, libero purus facilisis felis, a volutpat metus tortor bibendum elit. Integer nec mi eleifend, fermentum lorem vitae, finibus neque. Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus tempor dolor vel odio efficitur, ac sollicitudin ipsum feugiat. Proin feugiat aliquet turpis, et rhoncus nibh elementum quis.</div>
            <div data-layer="10decd18-e930-45e7-be76-06354e00fab1" class="inConsequatQuamIdSodalesHendreritErosMiMolestieLeoNecLaciniaRisusNequeTristiqueAugueProinTempusUrnaVelCongueElementumVestibulumEuismodAccumsanDuiAcIaculisSemViverraEuDonecConvallisElitVitaeOrnareCursusLiberoPu">In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus, libero purus facilisis felis, a volutpat metus tortor bibendum elit. Integer nec mi eleifend, fermentum lorem vitae, finibus neque. Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus tempor dolor vel odio efficitur, ac sollicitudin ipsum feugiat. Proin feugiat aliquet turpis, et rhoncus nibh elementum quis.</div>
            <svg data-layer="4e24f1ad-1ff0-454d-9aaa-1b966937bc87" preserveAspectRatio="none" viewBox="2.9999990463256836 2.9999990463256836 47.300048828125 47.3001708984375" class="iconMaterialChatbubbleoutlined2c7b5a4"><path d="M 45.57015228271484 2.999999046325684 L 7.730016231536865 2.999999046325684 C 5.128507137298584 2.999999046325684 2.999999046325684 5.128507137298584 2.999999046325684 7.730016231536865 L 2.999999046325684 50.3001708984375 L 12.46003437042236 40.84013366699219 L 45.57015228271484 40.84013366699219 C 48.17166137695312 40.84013366699219 50.3001708984375 38.71162796020508 50.3001708984375 36.11011505126953 L 50.3001708984375 7.730016231536865 C 50.3001708984375 5.128507137298584 48.17166137695312 2.999999046325684 45.57015228271484 2.999999046325684 Z M 45.57015228271484 36.11011505126953 L 12.46003437042236 36.11011505126953 L 7.730016231536865 40.84013366699219 L 7.730016231536865 7.730016231536865 L 45.57015228271484 7.730016231536865 L 45.57015228271484 36.11011505126953 Z"  /></svg>
            <svg data-layer="3d51d27c-819c-4119-8377-fb8083a5143e" preserveAspectRatio="none" viewBox="2.9999990463256836 2.9999990463256836 47.300048828125 47.3001708984375" class="iconMaterialChatbubbleoutlinee3418d90"><path d="M 45.57015228271484 2.999999046325684 L 7.730016231536865 2.999999046325684 C 5.128507137298584 2.999999046325684 2.999999046325684 5.128507137298584 2.999999046325684 7.730016231536865 L 2.999999046325684 50.3001708984375 L 12.46003437042236 40.84013366699219 L 45.57015228271484 40.84013366699219 C 48.17166137695312 40.84013366699219 50.3001708984375 38.71162796020508 50.3001708984375 36.11011505126953 L 50.3001708984375 7.730016231536865 C 50.3001708984375 5.128507137298584 48.17166137695312 2.999999046325684 45.57015228271484 2.999999046325684 Z M 45.57015228271484 36.11011505126953 L 12.46003437042236 36.11011505126953 L 7.730016231536865 40.84013366699219 L 7.730016231536865 7.730016231536865 L 45.57015228271484 7.730016231536865 L 45.57015228271484 36.11011505126953 Z"  /></svg>
            <svg data-layer="ce82a3dc-af12-4537-affc-c0e8b0489f7e" preserveAspectRatio="none" viewBox="2.9999990463256836 2.9999990463256836 47.30029296875 47.3001708984375" class="iconMaterialChatbubbleoutlineb499ca38"><path d="M 45.57015228271484 2.999999046325684 L 7.730016231536865 2.999999046325684 C 5.128507137298584 2.999999046325684 2.999999046325684 5.128507137298584 2.999999046325684 7.730016231536865 L 2.999999046325684 50.3001708984375 L 12.46003437042236 40.84013366699219 L 45.57015228271484 40.84013366699219 C 48.17166137695312 40.84013366699219 50.3001708984375 38.71162796020508 50.3001708984375 36.11011505126953 L 50.3001708984375 7.730016231536865 C 50.3001708984375 5.128507137298584 48.17166137695312 2.999999046325684 45.57015228271484 2.999999046325684 Z M 45.57015228271484 36.11011505126953 L 12.46003437042236 36.11011505126953 L 7.730016231536865 40.84013366699219 L 7.730016231536865 7.730016231536865 L 45.57015228271484 7.730016231536865 L 45.57015228271484 36.11011505126953 Z"  /></svg>
            <svg data-layer="85a697d2-c420-4ee6-8889-b2c638c24129" preserveAspectRatio="none" viewBox="2.9999990463256836 2.9999990463256836 47.30029296875 47.3001708984375" class="iconMaterialChatbubbleoutline"><path d="M 45.57015228271484 2.999999046325684 L 7.730016231536865 2.999999046325684 C 5.128507137298584 2.999999046325684 2.999999046325684 5.128507137298584 2.999999046325684 7.730016231536865 L 2.999999046325684 50.3001708984375 L 12.46003437042236 40.84013366699219 L 45.57015228271484 40.84013366699219 C 48.17166137695312 40.84013366699219 50.3001708984375 38.71162796020508 50.3001708984375 36.11011505126953 L 50.3001708984375 7.730016231536865 C 50.3001708984375 5.128507137298584 48.17166137695312 2.999999046325684 45.57015228271484 2.999999046325684 Z M 45.57015228271484 36.11011505126953 L 12.46003437042236 36.11011505126953 L 7.730016231536865 40.84013366699219 L 7.730016231536865 7.730016231536865 L 45.57015228271484 7.730016231536865 L 45.57015228271484 36.11011505126953 Z"  /></svg>
            <div data-layer="9bb97c23-7994-491f-ac9c-03d3f9b4c49e" class="hiGoodmorning">Hi, goodmorning.</div>
</div>
</div>

    `;
  }
}
customElements.define('chatbot-element', Chatbot);
