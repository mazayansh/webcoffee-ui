<script setup>
import IconHamburgerMenu from '@/components/icons/IconHamburgerMenu.vue'
import IconCross from '@/components/icons/IconCross.vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconPlusSign from '@/components/icons/IconPlusSign.vue'
import IconMinusSign from '@/components/icons/IconMinusSign.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconUserCircle from '@/components/icons/IconUserCircle.vue'
import IconShopBag from '@/components/icons/IconShopBag.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import ModalSearchProduct from '@/components/modals/ModalSearchProduct.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useIndexStore } from '@/stores/index.js'
import { useUserStore } from '@/stores/user.js'
import userApi from '@/services/user.js'

const { user } = storeToRefs(useUserStore())

const { toggleMobileMenu, toggleSearchModal} = useIndexStore()
let { isMobileMenuVisible, isModalSearchProductVisible } = storeToRefs(useIndexStore())

const router = useRouter()

function logout() {
	userApi.logout()
		.then(response => {
			useUserStore().user = null
			useUserStore().access_token = null

			router.push({ name: 'home' })
		})
}
</script>

<template>
    <div>
    	<header>
			<div class="flex items-center gap-x-2 w-full p-4 border-b bg-neutral-900 text-white md:py-4 md:px-8 md:gap-x-6">
				<button class="md:hidden" @click="toggleMobileMenu">
					<IconHamburgerMenu />
				</button>
				<button class="hidden">
					<IconCross />
				</button>
				<div class="flex-1 md:flex-none ml-2">
					<router-link :to="{name: 'home'}" :class="'font-pacifico text-3xl'">KopiSlur.id</router-link>
				</div>
				<nav role="navigation" class="hidden flex-1 md:flex md:gap-x-2">
					<div class="py-4 hover:bg-neutral-700">
						<router-link :to="{ name: 'home' }" class="p-4">
							SHOP
						</router-link>
					</div>
				</nav>
				<button title="Search" @click="toggleSearchModal">
					<IconSearch />
				</button>
				<router-link :to="{name: 'cart'}" title="Cart">
					<IconShopBag />
				</router-link>
				<router-link v-show="user" :to="{ name: 'orders' }" title="Member Area" :class="'text-neutral-300'">
					<IconUserCircle />
				</router-link>
				<router-link v-show="!user" :to="{ name: 'login' }" title="Login">
					<IconUser />
				</router-link>
				<button v-show="user" @click="logout" class="text-neutral-300">
					<IconLogout />
				</button>
			</div>
			<nav role="navigation" :class="[isMobileMenuVisible ? 'block' : 'hidden', 'bg-white']">
				<ul class="pt-4 pb-10 px-6">
					<li>
						<router-link :to="{ name: 'home' }" class="flex justify-between py-4 border-b border-b-neutral-800">
							<div>SHOP</div>
							<div>
								<IconChevronRight />
							</div>
						</router-link>
					</li>
				</ul>
			</nav>
		</header>

		<ModalSearchProduct v-show="isModalSearchProductVisible" />
    </div>
</template>
