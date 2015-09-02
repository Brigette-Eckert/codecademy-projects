 puts "Type something in"
text= gets.chomp
   
words = text.split(" ")

frequencies=Hash.new(0)

words.each{|word| frequencies [word] += 1}
puts frequencies

frequencies = frequencies.sort_by { |word, count| count }

frequencies.reverse

frequencies.each do |word, count|
    puts word + " " + count.to_s
end