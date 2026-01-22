import { StarIcon } from "lucide-react";

interface RatingProps {
	rating: number;
}

function Rating({ rating }: RatingProps) {
	return [1, 2, 3, 4, 5].map((index) => (
		<StarIcon
			key={index}
			color={index <= rating ? "#FFC107" : "#E4E5E9"}
			className="size-4"
		/>
	));
}

export default Rating;
