-- Create the weightrecords table
CREATE TABLE weightrecords (
    record_id integer NOT NULL DEFAULT nextval('weightrecords_record_id_seq'),
    user_id integer NOT NULL,
    weight numeric(5,2) NOT NULL CHECK (weight > 0),
    recorded_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,

    -- Add constraints
    CONSTRAINT weightrecords_pkey PRIMARY KEY (record_id),
    CONSTRAINT weightrecords_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON DELETE CASCADE
);

-- Create the sequence for auto-incrementing record_id
CREATE SEQUENCE weightrecords_record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- Create an index on the user_id column
CREATE INDEX idx_weightrecords_user_id ON weightrecords USING btree (user_id);