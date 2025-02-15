import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {

	@inject store;

	model() {
		return this.store.select('job');
	}

}
