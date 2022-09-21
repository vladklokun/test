import { Common } from "@k8slens/extensions";
import { observable, makeObservable } from "mobx";

export type KubescapeControlStoreModel = {
    controls: any;
}

export class KubescapeControlStore extends Common.Store.ExtensionStore<KubescapeControlStoreModel>{
    @observable controls: any = {};

    constructor() {
      super({
        configName: "kubescape-control-store",
        defaults: {
          controls: {},
        }
      });
      makeObservable(this);
    }

    protected fromStore({ controls }: KubescapeControlStoreModel): void {
      this.controls = controls;
    }

    toJSON(): KubescapeControlStoreModel {
      return {
        controls: this.controls
      };
    }
}