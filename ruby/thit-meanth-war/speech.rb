print "String Please"
user_input = gets.chomp
user_input.downcase!

if user_input.include? "s"
    user_input.gsub!(/s/, "th")
    puts "Your string with a lisp is #{user_input}"
else 
    print "There are no Ss in this string. We can not turn it into a lisp"
end

