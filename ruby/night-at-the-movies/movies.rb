movies = {
 StarWars: 4   
    
    
}
 puts "Choose an option" 
choice = gets.chomp

case choice 
when "add" 
    puts "What is the title of the moive you wish to add?"
    title= gets.chomp
     if movies[title.to_sym].nil?
    puts "On a scale from 1 to 4, how would you rate this moive?"
    rating=gets.chomp
     movies[title.to_sym] = rating.to_i
     puts "#{title} has been added. You gave it a rating of #{rating}."
 else
     puts "#{title} is already on the list. It has a rating of #{rating}"
 end
when "update"
    puts "What movie would you like to update?"
    title = gets.chomp
    if movies[title.to_sym].nil?
        puts "Error. #{title} is not on the list."
    else
        puts "Please enter an updated rating, on a scale of  1 to 4, for #{title}."
        rating= gets.chomp
        movies[title.to_sym] = rating.to_i
        puts "#{title} has been updated with a new rating of #{rating}"      
    end
when "display"
    movies.each do |movie, rating|
    puts "#{movie}: #{rating}"
end
when "delete"
   puts "What movie would you like to delete?"
   title= gets.chomp
    if movies[title.to_sym].nil?
        puts "Error. #{title} is not on the list." 
    else 
        movies.delete(title.to_sym)
        puts "#{title} has been removed."
    end
else
    puts "Error!"
end