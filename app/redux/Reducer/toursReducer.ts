/** @format */
import YssykKul from "../../assets/img/yssyk-kul.jpg"
import Osh from "../../assets/img/osh.jpg"
const initialState = {
	tours: [
		{
			id: 1,
			name: "Issyk-Kul",
			shortDescription: "Home to the world's second-largest saline lake",
			longDescription:
				"Issyk-Kul is famous for its beautiful lake surrounded by snow-capped mountains. It offers beaches, hot springs, and various outdoor activities.",
			imageUrl: YssykKul,
			comments: [
				{
					id: 1000,
					name: "John Doe",
					stars: 5,
					comment: "Great tour!",
				},
				{
					id: 1000,
					name: "John Doe",
					stars: 5,
					comment: "Great tour!",
				},
			],
			tours: [
				{
					id: 101,
					name: "Lake Shore Excursion",
					description: "Explore the beautiful shores of Issyk-Kul lake",
					duration: "1 day",
					price: 50,
					guideId: 1,
				},
				{
					id: 102,
					name: "Mountain Hiking Adventure",
					description:
						"Hike in the Tian Shan mountains with breathtaking views",
					duration: "3 days",
					price: 200,
					guideId: 2,
				},
			],
		},
		{
			id: 2,
			name: "Osh",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl: Osh,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: "Half day",
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: "1 day",
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 3,
			name: "Bishkek",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl: Osh,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: "Half day",
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: "1 day",
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 4,
			name: "Naaryn",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl: Osh,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: "Half day",
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: "1 day",
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 5,
			name: "Talas",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl: Osh,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: "Half day",
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: "1 day",
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 6,
			name: "Batken",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl: Osh,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: "Half day",
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: "1 day",
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 7,
			name: "Jalal-Abad",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl: Osh,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: "Half day",
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: "1 day",
					price: 60,
					guideId: 4,
				},
			],
		},
		{
			id: 8,
			name: "Chui",
			shortDescription: "One of the oldest cities in Central Asia",
			longDescription:
				"Osh is known for its rich history, vibrant bazaars, and the sacred Sulaiman-Too mountain.",
			imageUrl: Osh,
			rating: 4.6,
			reviews: 180,
			tours: [
				{
					id: 201,
					name: "Osh Bazaar Tour",
					description:
						"Experience the colors and flavors of the ancient Osh Bazaar",
					duration: "Half day",
					price: 30,
					guideId: 3,
				},
				{
					id: 202,
					name: "Sulaiman-Too Pilgrimage",
					description: "Visit the sacred mountain and its historical sites",
					duration: "1 day",
					price: 60,
					guideId: 4,
				},
			],
		},
	],

	tour: [

	],

	loading: false,
	error: null,
}

export const toursReducer = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case "GET_TOURS_SUCCESS":
			return {
				...state,
				tours: [...state.tours, action.payload],
				loading: false,
				error: null,
			}

		case "GET_TOURS_ERROR":
			return { ...state, loading: false, error: action.payload }

			case "GET_USER_TOURS_SUCCESS":
			return {
				...state,
				tour: [...state.tour, action.payload],
				loading: false,
				error: null,
			}

		default:
			return state
	}
}
