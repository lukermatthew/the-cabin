import supabase from "./supabase";

// REMEMBER RLS POLICIES
export async function getGuests({ page, pageSize, sortBy, searchQuery }) {
  let query = supabase.from("guests").select("*", { count: "exact" });

  // Search
  if (searchQuery) {
    query = query.ilike("fullName", `%${searchQuery}%`);
  }

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Guests could not be loaded");
  }

  return { data, count };
}

export async function createEditGuest(newGuest, id) {
  // 1. Create/edit cabin
  let query = supabase.from("guests");

  // A) CREATE
  if (!id) query = query.insert([{ ...newGuest }]);

  // B) EDIT
  if (id) query = query.update({ ...newGuest }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function deleteGuest(id) {
  const { data, error } = await supabase.from("guests").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be deleted");
  }
  return data;
}

export async function updateGuest(id) {
  const { data, error } = await supabase
    .from("guests")
    .update({ other_column: "otherValue" })
    .eq("some_column", "someValue")
    .select();

  if (error) {
    console.error(error);
    throw new Error("Guests could not be updated");
  }
  return data;
}
