<template>
	
	<transition appear name="slide-fade">

		<div class="controllers anim-3"
			v-bind:class="{ 'is-near' : display.near }">

			<div class="left">

<!-- 				<transition name="clock-fade">
 -->
					<button
						v-bind:class="{ 'show' : display.play }"
						class="button ic play"
						aria-label='start'
						v-on:click=play_control>

						<svg
							class="colour-fill-bg"
							height="100%" 
							viewBox="0 0 224 224" 
							version="1.1" 
							xmlns="http://www.w3.org/2000/svg" 
							xmlns:xlink="http://www.w3.org/1999/xlink" 
							xml:space="preserve" 
							xmlns:serif="http://www.serif.com/">

							<path d="M112.434,0.799c61.571,0 111.558,49.988 111.558,111.558c0,61.57 -49.987,111.558 -111.558,111.558c-61.57,0 -111.557,-49.988 -111.557,-111.558c0,-61.57 49.987,-111.558 111.557,-111.558Zm78.276,111.558l-124.936,81.046l0,-162.092l124.936,81.046Z"/>

						</svg>

					</button>

				<!-- </transition> -->

				<!-- <transition name="clock-fade"> -->

					<button
						v-bind:class="{ 'show' : display.pause }"
						class="button ic pause"
						aria-label='pause'
						v-on:click=pause_control>

						<svg
							class="colour-fill-bg"
							height="100%" 
							viewBox="0 0 224 224" 
							version="1.1" 
							xmlns="http://www.w3.org/2000/svg" 
							xmlns:xlink="http://www.w3.org/1999/xlink" 
							xml:space="preserve" 
							xmlns:serif="http://www.serif.com/">

							<path d="M112.434,0.499c61.571,0 111.558,49.987 111.558,111.558c0,61.57 -49.987,111.557 -111.558,111.557c-61.57,0 -111.557,-49.987 -111.557,-111.557c0,-61.571 49.987,-111.558 111.557,-111.558Zm-10,42.422l-40,0l0,137l40,0l0,-137Zm60,0l-40,0l0,137l40,0l0,-137Z"/>

						</svg>

					</button>

				<!-- </transition> -->
				
				<!-- <transition name="clock-fade"> -->

					<button
						v-bind:class="{ 'show' : display.resume }"
						class="button ic resume"
						aria-label='resume'
						v-on:click=resume_control>

						<svg
							class="colour-fill-bg"
							height="100%" 
							viewBox="0 0 224 224" 
							version="1.1" 
							xmlns="http://www.w3.org/2000/svg" 
							xmlns:xlink="http://www.w3.org/1999/xlink" 
							xml:space="preserve" 
							xmlns:serif="http://www.serif.com/">

							<path d="M112.434,0.799c61.571,0 111.558,49.988 111.558,111.558c0,61.57 -49.987,111.558 -111.558,111.558c-61.57,0 -111.557,-49.988 -111.557,-111.558c0,-61.57 49.987,-111.558 111.557,-111.558Zm78.276,111.558l-124.936,81.046l0,-162.092l124.936,81.046Z"/>

						</svg>

					</button>

				<!-- </transition>	 -->

			</div>

			<div class="divider"></div>

			<div class="right">

				<!-- <transition name="clock-fade"> -->

					<button
						v-bind:class="{ 'show' : display.stop }"
						class="button ic stop"
						aria-label='stop'
						v-on:click=stop_control>
						
						<svg
							class="colour-fill-bg"
							height="100%" 
							viewBox="0 0 224 224" 
							version="1.1" 
							xmlns="http://www.w3.org/2000/svg" 
							xmlns:xlink="http://www.w3.org/1999/xlink" 
							xml:space="preserve" 
							xmlns:serif="http://www.serif.com/">

							<path d="M112.55,0.799c61.57,0 111.557,49.988 111.557,111.558c0,61.57 -49.987,111.558 -111.557,111.558c-61.571,0 -111.558,-49.988 -111.558,-111.558c0,-61.57 49.987,-111.558 111.558,-111.558Zm52.307,52.922l-104.615,0l0,116l104.615,0l0,-116Zm0,0l0,116l0,-116Z"/>

						</svg>

					</button>

				<!-- </transition> -->
				
			</div>

		</div>

	</transition>	

</template>

<script>

export default {
	name: 'cTimeControlVisual',
	data(){
		return {
			display : {
				play : false,
				pause : false,
				stop : false,
				resume : false,
				near : false,
			}
		}
	},

	computed : {
	},

	methods : {

		mode_display : function( input ){

			switch( input ){
				case 'play':
					this.set_controls([false,true,true,false,false]);
					break;
				case 'pause':
					this.set_controls([false,false,true,true,false]);
					break;
				case 'resume':
					this.set_controls([false,true,true,false,false]);
					break;
				case 'stop':
					this.set_controls([true,false,false,false,false]);
					break;
				case 'finished':
					this.set_controls([true,false,false,false,true]);
					break;
				case 'near':
					this.display.near = true;
					break;
				default :
			}
		},

		set_controls : function( args ){
			if(args.length !== 5) return;
			this.display.play = args[0];
			this.display.pause = args[1];
			this.display.stop = args[2];
			this.display.resume = args[3];
			this.display.near = args[4];
		},

		play_control : function(){
			this.$root.$emit('mode_set', 'play');
		},
		pause_control : function(){
			this.$root.$emit('mode_set', 'pause');
		},
		stop_control : function(){
			this.$root.$emit('mode_set', 'stop');
		},
		resume_control : function(){
			this.$root.$emit('mode_set', 'resume');
		},
	},

	mounted(){
		this.$root.$on('mode_display', this.mode_display);
	},	

}

</script>

<style scoped >

	.button {
		transition: .5s;
		backface-visibility: hidden;
		pointer-events: none;
		transform: translateY(-4rem);
	}
	.button.show {
		pointer-events: all;
		transform: translateY(0);
	}

	.button svg{
		transition: .3s;
		opacity: 0;
	}
	.button.show svg{
		opacity: 1;
	}	
	
	.controllers {
		width: 100%;
		transition-delay: 1.3s;
		/*overflow: hidden;*/
		position: relative;

		margin: 0;
		padding: 0;
	}

	.controllers .left, .controllers .right{
		display: inline-block;
		min-height: 3.5rem;
		min-width: 3.5rem;
		padding: 0;
		margin: 0;
		position: relative;
	}
	.controllers .divider {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		margin: 0;
		padding: 0;
		position: relative;
	}


	.controllers .left {		
		/*background-color: purple;		*/
	}
	.controllers .right {
		/*background-color: yellow;*/
	}

	button {
		min-width: unset;
		background-color: unset;
		margin: 0;
		padding: 0;
		/*transition: .3s ease;	*/
	}

	.ic {
		height: 3.5rem;
		fill-rule:evenodd;
		clip-rule:evenodd;
		stroke-linejoin:round;
		stroke-miterlimit:1.4;
		/*opacity: 1;*/

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.is-near .ic{
		opacity: 0;
		pointer-events: none;
	}

	.ic.play {
		/*background-color: green;*/
		/*position: ab*/
	}

.clock-fade-enter-active {
	animation: anim-tick-clock-keys-in .5s cubic-bezier(0.4, 0, 0.02, 1);
}
.clock-fade-leave-active {
	animation: anim-tick-clock-keys-out .5s cubic-bezier(0.4, 0, 0.02, 1);
}
.clock-fade-enter {
	opacity: 0;
	transform: translateY(-2rem) scale(.4);
}
.clock-fade-enter-to {
	/*opacity: 1;*/
}
.clock-fade-leave {
	/*opacity: 0;*/
}
.clock-fade-leave-to {
	transform: translateY(2rem) scale(.2);
	opacity: 0;
}


@keyframes anim-tick-clock-keys-in {
	0% {
		opacity: 0;
		transform: translateY(-3.5rem) scale(.4);
	}
	50% {
		opacity: 0.1;
	}	
	66% {
		transform: translateY(-.2rem) scale(.9);
	}
	90% {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
}

@keyframes anim-tick-clock-keys-out {
	0% {
		opacity: 1;
		fill: hsla(200,5%,50%,1) !important;
		transform: translateY(0) scale(1);
	}
	33% {
		transform: translateY(1rem) scale(.75);
		fill: hsla(200,5%,50%,1) !important;
	}
	50% {
		opacity: 0.1;
	}	
	90% {
		opacity: 0;
		transform: translateY(3.5rem) scale(.2);
	}
}

</style>

