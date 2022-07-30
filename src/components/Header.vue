<script setup>
import IconHamburgerMenu from '@/components/icons/IconHamburgerMenu.vue'
import IconCross from '@/components/icons/IconCross.vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconPlusSign from '@/components/icons/IconPlusSign.vue'
import IconMinusSign from '@/components/icons/IconMinusSign.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconShopBag from '@/components/icons/IconShopBag.vue'
</script>

<template>
    <header>
		<div class="flex items-center gap-x-2 w-full p-4 border-b bg-neutral-900 text-white md:py-4 md:px-8 md:gap-x-6">
			<button class="md:hidden">
				<icon-hamburger-menu />
			</button>
			<button class="hidden">
				<icon-cross />
			</button>
			<div class="flex-1 md:flex-none ml-2">
				<router-link :to="{name: 'home'}">LOGO</router-link>
			</div>
			<nav role="navigation" class="hidden flex-1 md:flex md:gap-x-2">
				<div class="group py-4 hover:bg-neutral-700">
					<a href="#" class="p-4">
						COFFEE
						<IconChevronDown />
					</a>
					<div class="relative hidden group-hover:block">
						<ul class="absolute left-0 top-0 w-fit bg-neutral-600 text-white p-4 flex flex-col">
							<li class="border-b border-b-neutral-400">
								<a href="#" class="flex justify-between items-center hover:bg-neutral-700">
									<div class="p-2">TYPE</div>
									<div>
										<icon-plus-sign />
										<icon-minus-sign />
									</div>
								</a>
								<ul class="flex flex-col gap-y-2 whitespace-nowrap">
									<li>
										<a href="#" class="block w-full px-4 py-1 hover:bg-neutral-700">ALL COFFE</a>
									</li>
									<li>
										<a href="#" class="block w-full px-4 py-1 hover:bg-neutral-700">ARABICA</a>
									</li>
									<li>
										<a href="#" class="block w-full px-4 py-1 hover:bg-neutral-700">ESBRESSO</a>
									</li>
								</ul>
							</li>
							<li class="border-b border-b-neutral-400">
								<a href="#" class="flex justify-between p-2 hover:bg-neutral-700">
									<div>ORIGIN</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="py-4 hover:bg-neutral-700">
					<a href="#" class="p-4">
						ABOUT
					</a>
				</div>
			</nav>
			<button title="Search">
				<IconSearch />
			</button>
			<router-link :to="{ name: 'login' }" title="Login">
				<IconUser />
			</router-link>
			<router-link :to="{name: 'cart'}" title="Cart">
				<IconShopBag />
			</router-link>
		</div>
		<nav role="navigation" class="bg-white hidden">
			<ul class="pt-4 pb-10 px-6">
				<li>
					<router-link :to="{ name: 'home' }" class="flex justify-between py-4 border-b border-b-neutral-800">
						<div>HOME</div>
						<div>
							<IconChevronRight />
						</div>
					</router-link>
				</li>
				<li>
					<a href="#" class="flex justify-center py-4  border-b border-b-neutral-800">
						<div>COFFEE</div>
						<div class="absolute left-4 rotate-180">
							<IconChevronRight />
						</div>
					</a>
					<ul>
						<li class="border-b border-b-neutral-800 pb-4">
							<a href="#" class="flex justify-between py-4 ">
								<div>TYPE</div>
								<div>
									<icon-plus-sign />
									<icon-minus-sign />
								</div>
							</a>
							<ul class="px-4 flex flex-col gap-y-2">
								<li>
									<a href="#" class="block w-full">ALL COFFE</a>
								</li>
								<li>
									<a href="#" class="block w-full">ARABICA</a>
								</li>
								<li>
									<a href="#" class="block w-full">ESBRESSO</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<a href="#" class="flex justify-between py-4 border-b border-b-neutral-800">
						<div>ABOUT</div>
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>
